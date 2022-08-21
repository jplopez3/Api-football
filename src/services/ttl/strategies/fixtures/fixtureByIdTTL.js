import {
	isBefore,
	isAfter,
	differenceInSeconds,
	isToday,
	endOfDay,
	minutesToSeconds,
	subMinutes,
	add,
} from 'date-fns';
import {
	hasGameEnded,
	isLiveGame,
	gameNotStarted,
} from '../../../../utils/utilFunctions.js';
import fixturesHelper from '../../../../utils/fixturesHelper.js';
import TtlStrategy from '../../ttlStrategy.js';

class FixtureByIdTTL extends TtlStrategy {
	async getInSeconds({ data: { response } }) {
		const { fixture } = response[0];
		this.fixtureDate = new Date(fixture.date);
		let ttl = 0;
		const now = new Date();
		if (
			isLiveGame(fixture) ||
			(isBefore(this.fixtureDate, now) && gameNotStarted(fixture))
		) {
			ttl = 15;
		} else if (isBefore(this.fixtureDate, now) && hasGameEnded(fixture)) {
			const expectedDate = add(now, {
				days: 2,
			});
			ttl = differenceInSeconds(expectedDate, now);
		} else if (isAfter(this.fixtureDate, now)) {
			ttl = await handleFutureFixture(this.fixtureDate, response[0]);
		}
		return ttl;
	}

	getDBExpireDate() {
		return this.fixtureDate;
	}
}

async function handleFutureFixture(fixtureDate, fixture) {
	const now = new Date();
	const { lineups } = fixture;
	const timeUntiFixtureStart = differenceInSeconds(fixtureDate, now);
	let cacheDate;

	const leagueId = fixturesHelper.getLeagueId(fixture);
	//if(hasCoverage) cache ate 30 minutos antes do jogo
	if (await fixturesHelper.hasCoverage(leagueId)) {
		// Se na resposta temos os lineups volta a ter cache ate ao inicio do jogo
		if (lineups.length > 0) {
			cacheDate = new Date(fixtureDate);
		}
		// se for < 30 minutos cache de 15 segundos até receber informaçao dos lineups
		else if (
			timeUntiFixtureStart < minutesToSeconds(30) &&
			lineups.length === 0
		) {
			// > 30min
			return 15;
		} else {
			cacheDate = isToday(fixtureDate)
				? subMinutes(fixtureDate, 30)
				: endOfDay(now);
		}
		//se nao tiver coverage ate ao inicio do jogo
	} else {
		cacheDate = isToday(fixtureDate)
			? new Date(fixtureDate)
			: endOfDay(now);
	}

	return differenceInSeconds(cacheDate, new Date());
}

export default FixtureByIdTTL;

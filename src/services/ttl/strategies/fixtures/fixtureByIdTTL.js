import { isBefore, isAfter, differenceInSeconds, isToday } from 'date-fns'
import { hasGameEnded, isLiveGame } from '../../../../utils/utilFunctions.js';
import fixturesHelper from '../../../../utils/fixturesHelper.js';

import TtlStrategy from '../../ttlStrategy.js';
// ver o coverage para o league ID
//if(hasCoverage) cache ate 30 minutos antes do jogo
//se noa tiver coverage ate ao inicio do jogo
// se for < 30 minutos cache de 15 segundos até receber informaçao dos lineups
// Se na resposta temos os lineups volta a ter cache ate ao inicio do jogo
class FixtureByIdTTL extends TtlStrategy {
	async getInSeconds({ data: { response } }) {
		const { fixture } = response[0];
		this.fixtureDate = new Date(fixture.date);
		let ttl = 0;
		const now = new Date();

		if(isLiveGame(fixture)){
			ttl = 15;
		} else if(isBefore(this.fixtureDate, now) && hasGameEnded(fixture)) {
			//TODO: manter cache ate 2 dias ou dia anterior
			ttl = 0;
		} else if(isAfter(this.fixtureDate, now)) {
			ttl = await handleFutureFixture(this.fixtureDate, response[0])
		}
		return ttl;
	}

	getDBExpireDate() {
		return this.fixtureDate;
	}
}

async function handleFutureFixture(fixtureDate, match) {
	const now = new Date();
	const {lineups} = match;
	const timeUntilMatchStart = differenceInSeconds(fixtureDate, now);
	let myDate;

	const leagueId = fixturesHelper.getLeagueId(match);
	//if(hasCoverage) cache ate 30 minutos antes do jogo
	if(await fixturesHelper.hasCoverage(leagueId)) {
		// Se na resposta temos os lineups volta a ter cache ate ao inicio do jogo
		if(lineups.length > 0) {
			myDate = new Date(fixtureDate);
		}
		// se for < 30 minutos cache de 15 segundos até receber informaçao dos lineups
		if(timeUntilMatchStart < 1800 && lineups.length === 0) { // > 30min
			return 15;
		} else {
			if(isToday(fixtureDate)){ 
				//cache ate 30 minutos antes do jogo
				myDate = new Date(fixtureDate.setMinutes(fixtureDate.getMinutes() - 30));
			}
			else{
				//cache until end of the day
				now.setHours(23);
				now.setMinutes(59);
				myDate = now;
			}
			
		}
		//se nao tiver coverage ate ao inicio do jogo
	} else {
		if(isToday(fixtureDate)){
			myDate = new Date(fixtureDate);

		}else {
			//cache until end of the day
			now.setHours(23);
			now.setMinutes(59);
			myDate = now;
		}
	}

	return differenceInSeconds(myDate, new Date());

}


export default FixtureByIdTTL;

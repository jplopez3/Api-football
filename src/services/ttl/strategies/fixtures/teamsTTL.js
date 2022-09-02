import TtlStrategy from '../../ttlStrategy.js';
import { add, isAfter, differenceInSeconds, isToday, isBefore } from 'date-fns';
import {
	hasGameEnded,
	isLiveGame,
	gameNotStarted,
} from '../../../../utils/utilFunctions.js';

class FixturesByTeam extends TtlStrategy {
	getInSeconds({ data: { response } }) {
		const { fixture } = response[0];
		this.fixtureDate = new Date(fixture.date);
		const now = new Date();

		if (
			isToday(this.fixtureDate) &&
			(isLiveGame(fixture) || gameNotStarted(fixture))
		) {
			return 0;
		} else if ((isBefore(this.fixtureDate, now), hasGameEnded(fixture))) {
			const cacheDate = add(this.fixtureDate, {
				days: 2,
			});
			return differenceInSeconds(cacheDate, this.fixtureDate);
		} else if (
			isAfter(this.fixtureDate, now) &&
			!isToday(this.fixtureDate)
		) {
			const cacheDate = add(this.fixtureDate, {
				days: 1,
			});
			return differenceInSeconds(cacheDate, this.fixtureDate);
		}

		return 120;
	}
}
export default FixturesByTeam;

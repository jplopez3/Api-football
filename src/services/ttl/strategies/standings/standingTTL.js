import { addHours, differenceInSeconds, setMinutes } from 'date-fns';
import TtlStrategy from '../../ttlStrategy.js';

class Standings extends TtlStrategy {
	getInSeconds() {
		const dateNow = new Date();
		const oneHourMore = addHours(dateNow, 1);
		const expectedTime = setMinutes(oneHourMore, 5);
		const ttlInseconds = differenceInSeconds(expectedTime, dateNow);

		return ttlInseconds;
	}
}

export default Standings;

import {
	secondsUntilDate,
	nextDayDate,
	isDateInFuture,
	isDateInPast,
	isTodayDate,
} from '../../../utils/utilFunctions.js';
import TtlStrategy from '../../../services/ttl/ttlStrategy.js';

class FixturesByDateTTL extends TtlStrategy {
	getInSeconds(date) {
		if (isTodayDate(date)) {
			return getTodayFixturesTTL(date);
		} else if (isDateInPast(date)) {
			return getPastFixturesTTL(date);
		} else if (isDateInFuture(date)) {
			return getFutureFixturesTTL(date);
		} else {
			console.error('Uh oh!!');
		}
	}
}
const getTodayFixturesTTL = () => {
	//Todo:
	//Se nao houver Jogos
	//cache até ao proximo jogo live - 30min
	//< 30 minutos cache de 15 segundos

	return 15;
};

const getFutureFixturesTTL = () => {
	const today = new Date();
	const tomorrow = nextDayDate(today);

	const inSeconds = () => {
		return secondsUntilDate(tomorrow);
	};

	const getDate = () => {
		return tomorrow;
	};

	return { inSeconds, getDate };
};

const getPastFixturesTTL = () => {
	//forever
	return 0;
};

export default FixturesByDateTTL;

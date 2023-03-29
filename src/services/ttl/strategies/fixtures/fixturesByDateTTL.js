import { nextDayDate } from '../../../../utils/utilFunctions.js';
import { isBefore, isAfter, differenceInSeconds, isToday, add } from 'date-fns';
import { isLiveGame } from '../../../../utils/utilFunctions.js';
import TtlStrategy from '../../ttlStrategy.js';

class FixturesByDateTTL extends TtlStrategy {
	getInSeconds({ params: { date }, data: { response } }) {
		const hasLiveGame = response.some(({ fixture }) => isLiveGame(fixture));
		const now = new Date();
		date = new Date(date);
		if (isToday(date) || hasLiveGame) {
			return getTodayFixturesTTL(date);
		} else if (isBefore(date, now)) {
			return getPastFixturesTTL(date);
		} else if (isAfter(date, now)) {
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
		return differenceInSeconds(tomorrow, today);
	};

	const getDate = () => {
		return tomorrow;
	};

	return inSeconds();
};

const getPastFixturesTTL = () => {
	const now = new Date();
	const expectedDate = add(now, {
		days: 2,
	});
	return differenceInSeconds(expectedDate, now);
};

export default FixturesByDateTTL;

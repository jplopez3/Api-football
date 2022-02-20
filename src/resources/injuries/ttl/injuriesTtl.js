import TtlStrategy from '../../../services/ttl/ttlStrategy.js';
import { secondsUntilDate, nextDayDate, isTodayDate } from '../../../utils/utilFunctions.js';

//Todo: se o jogo for hoje cache de 4 horas ate começar o jogo
//depois cache de 1 dia
class InjuriesTtl extends TtlStrategy {
	getInSeconds({ params, data: { response } }) {
		
		if(!response[0]) return 14400;
		return isTodayDate(response[0]?.fixture?.date) ? 14400 : secondsUntilDate(nextDayDate(new Date()));
	}
}
export default InjuriesTtl;

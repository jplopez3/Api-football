import { secondsUntilDate, isLiveGame } from '../../../utils/utilFunctions.js';
import TtlStrategy from '../../../services/ttl/ttlStrategy.js';
// ver o coverage para o league ID
//if(hasCoverage) cache ate 30 minutos antes do jogo
//se noa tiver coverage ate ao inicio do jogo
// se for < 30 minutos cache de 15 segundos até receber informaçao dos lineups
// Se na resposta temos os lineups volta a ter cache ate ao inicio do jogo
class FixtureByIdTTL extends TtlStrategy {
	getInSeconds({ data: { response } }) {
		const { fixture } = response[0];
		this.fixtureDate = new Date(fixture.date);
		return isLiveGame(fixture) ? 15 : secondsUntilDate(this.fixtureDate);
	}

	getDBExpireDate() {
		return this.fixtureDate;
	}
}
export default FixtureByIdTTL;

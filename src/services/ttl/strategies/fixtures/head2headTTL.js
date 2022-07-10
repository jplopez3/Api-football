import TtlStrategy from '../../ttlStrategy.js';

class Head2headTTL extends TtlStrategy {
	//TODO: h2h
	//Jogos no futuro:
	//	cache 1 dia
	//jogos live:
	// Cache invalida quando termina o jogo
	getInSeconds() {
		//Todo:
		//Se nao houver Jogos
		//cache até ao proximo jogo live - 30min
		//< 30 minutos cache de 15 segundos

		return 120;
	}
}
export default Head2headTTL;

import TtlStrategy from '../../ttlStrategy.js';

class Head2headTTL extends TtlStrategy {
	
	getInSeconds() {
		//TODO: h2h, CRIAR TEAMS TTL
		//jogo e hoje?
			// Nao começou OU e Live:
				//cache ate acabar(TF) ttl:0 
				
		//Jogos no futuro(sem ser hoje):
			//	cache 1 dia
		//Jogo no passado:
			// cache 1 ou 2 dias


		return 120;
	}
}
export default Head2headTTL;

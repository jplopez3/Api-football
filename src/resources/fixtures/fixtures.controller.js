export default (req, res) => {
	res.status(200).json(res.locals.cachedData);
};
//FIxtures
//id and  - se tiver live - 15s
// se NAO tiver live 1 day
// intervalo - TBD : 2H? 15min?

//date - no mesmo dia: ??
// live 15 segundos
// no passado: DB
// no futuro(dia a seguir em diante)

//h2h
//Jogos no futuro que
//cache 1 dia
// jogos live
// Cache invalida quando termina o jogo

// /ttl =  ttl ? ttl : this.cacheConfig.stdTTL;

// 	//Todo: implement in controller
// 	const isliveOrDate = Object.keys(req.query).some((key) =>
// 	['live', 'date'].includes(key)
// );
// const ttl = isliveOrDate ? 15 : '';

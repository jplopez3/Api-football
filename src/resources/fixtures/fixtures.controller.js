import cacheFactory from '../../utils/cache/CacheFactory.js';
import { saveDataInCache } from '../../repositories/footballApi.cache.js';
import {
	isLiveGame,
	isTodayDate,
	secondsUntilDate,
} from '../../utils/utilFunctions.js';

const fixturesCache = cacheFactory.get('/fixtures');

export default (req, res) => {
	const queryParams = req.query ? req.query : {};
	const fixturesData = res.locals.cachedData;
	const dataExpired = res.locals.expired;

	if (dataExpired) {
		let ttl = getCacheTtl(fixturesData, queryParams);
		saveDataInCache(fixturesCache, queryParams, fixturesData, ttl);
	}

	res.status(200).json(res.locals.cachedData);
};
const getCacheTtl = (fixturesData, queryParams) => {
	const fixtureType = getRequestFixtureType(queryParams);
	let ttl;

	switch (fixtureType) {
		case 'live':
			ttl = 15;
			break;
		case 'id':
			ttl = getFixtureByIdCacheTTL(fixturesData);
			break;
		case 'date':
			ttl = getFixtureByDateCacheTTL(queryParams, fixturesData);
			break;
		default:
			ttl = null;
			break;
	}

	return ttl;
};

const getRequestFixtureType = (query) => {
	const reqTypes = ['live', 'id', 'date'];
	const queries = Object.keys(query);
	return queries.find((query) => reqTypes.includes(query));
};

const getFixtureByIdCacheTTL = ({ response }) => {
	const { fixture } = response[0];
	return isLiveGame(fixture) ? 15 : secondsUntilDate(new Date(fixture.date));
};

const getFixtureByDateCacheTTL = ({ date }) => {
	const nextDay = new Date();
	nextDay.setDate(nextDay.getDate()+1);
	nextDay.setHours(0);
	nextDay.setMinutes(0);
	return isTodayDate(date) ? 15 : secondsUntilDate(nextDay);
};

//h2h
//Jogos no futuro que
//cache 1 dia
// jogos live
// Cache invalida quando termina o jogo

// /ttl =  ttl ? ttl : this.cacheConfig.stdTTL;

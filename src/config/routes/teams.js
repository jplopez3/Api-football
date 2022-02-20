import strategies from '../../services/cache/cache_strategy_types.js';
import statisticTTL from '../../resources/teams/ttl/index.js';

const {
	getFromMemoryCache,
	getFromFootballApi,
	saveInMemoryCache,
} = strategies;

const statisticsCacheConfig = {
	route: '/statistics',
	pathToCache: '/teams/statistics',
	cacheStrategies: [
		getFromMemoryCache,
		getFromFootballApi,
		saveInMemoryCache,
	],
	ttlStrategy: statisticTTL,
};

export { statisticsCacheConfig };

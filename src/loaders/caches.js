import { cacheMiddleware } from '../utils/middlewares/index.js';

const fixturesCacheMiddleware = cacheMiddleware({
	pathToCache: '/fixtures',
	cacheStdTTL: 60,
});

const statisticsCacheMiddleware = cacheMiddleware({
	pathToCache: '/fixtures/statistics',
});

const headToHeadCacheMiddleware = cacheMiddleware({
	pathToCache: '/fixtures/headtohead',
});

export {
	fixturesCacheMiddleware,
	statisticsCacheMiddleware,
	headToHeadCacheMiddleware,
};
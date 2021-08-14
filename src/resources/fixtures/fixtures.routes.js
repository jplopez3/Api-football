import { Router } from 'express';
import {
	cacheMiddleware,
	groupByCountry,
} from '../../utils/middlewares/index.js';
import fixturesController from './fixtures.controller.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

const {
	fixturesCacheMiddleware,
	statisticsCacheMiddleware,
	headToHeadCacheMiddleware,
} = initMiddleware();

// /fixtures
const router = Router();

router.get(
	'/',
	[
		fixturesCacheMiddleware.getFromCache,
		groupByCountry(['live', 'date']),
		fixturesCacheMiddleware.saveInCache,
	],
	fixturesController
);
router.get(
	'/statistics',
	[
		statisticsCacheMiddleware.getFromCache,
		statisticsCacheMiddleware.saveInCache,
	],
	cachedDataController
);
router.get(
	'/headtohead',
	[
		headToHeadCacheMiddleware.getFromCache,
		statisticsCacheMiddleware.saveInCache,
	],
	cachedDataController
);

function initMiddleware() {
	const fixturesCacheMiddleware = cacheMiddleware({
		pathToCache: '/fixtures',
		cacheStdTTL: 15,
	});

	const statisticsCacheMiddleware = cacheMiddleware({
		pathToCache: '/fixtures/statistics',
	});

	const headToHeadCacheMiddleware = cacheMiddleware({
		pathToCache: '/fixtures/headtohead',
	});

	return {
		fixturesCacheMiddleware,
		statisticsCacheMiddleware,
		headToHeadCacheMiddleware,
	};
}
export default router;

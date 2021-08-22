import { Router } from 'express';
import { groupByCountry } from '../../utils/middlewares/index.js';
import {
	fixturesCacheMiddleware,
	statisticsCacheMiddleware,
	headToHeadCacheMiddleware
} from '../../loaders/caches.js';
import fixturesController from './fixtures.controller.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

// /fixtures
const router = Router();

router.get(
	'/',
	[
		fixturesCacheMiddleware.getFromCache,
		groupByCountry(['live', 'date'])
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

export default router;

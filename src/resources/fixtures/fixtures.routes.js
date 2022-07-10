import { Router } from 'express';
import {
	fixturesCacheConfig,
	statisticsCacheConfig,
	headToHeadCacheConfig,
} from '../../config/routes/fixtures.js';
import fixturesController from './fixtures.controller.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';
import { cacheMiddleware } from '../../utils/middlewares/index.js';

const router = Router();
router.get(fixturesCacheConfig.route, fixturesController);
router.get(
	statisticsCacheConfig.route,
	[cacheMiddleware(statisticsCacheConfig)],
	cachedDataController
);

router.get(
	headToHeadCacheConfig.route,
	[cacheMiddleware(headToHeadCacheConfig)],
	cachedDataController
);

export default router;

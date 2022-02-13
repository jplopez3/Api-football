import { Router } from 'express';
import ttlService from '../../services/ttl/Ttl.service.js';
import routesConfig from '../../config/routes/fixtures.js';
import fixturesController from './fixtures.controller.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';
import { cacheMiddleware } from '../../utils/middlewares/index.js';

// /fixtures
routesConfig.forEach((config) => {
	ttlService.registerStrategy(config);
});

const [
	fixturesCacheConfig,
	statisticsCacheConfig,
	headToHeadCacheConfig,
] = routesConfig;

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

import { Router } from 'express';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';
import { cacheMiddleware } from '../../utils/middlewares/index.js';
import statisticTTL from '../../resources/teams/ttl/index.js';

// /teams
const router = Router();

const statisticsCacheConfig = {
	route: '/statistics',
	pathToCache: '/teams/statistics',
	ttlStrategy: new statisticTTL(),
};
router.get(
	statisticsCacheConfig.route,
	[cacheMiddleware(statisticsCacheConfig)],
	cachedDataController
);

export default router;

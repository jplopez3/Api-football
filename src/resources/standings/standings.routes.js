import { Router } from 'express';
import { cacheMiddleware } from '../../utils/middlewares/index.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

// /standings
const router = Router();
const basePath = '/standings';
const routeConfig = {
	route: '/',
	pathToCache: basePath,
};

router.get(
	routeConfig.route,
	[cacheMiddleware(routeConfig)],
	cachedDataController
);

export default router;

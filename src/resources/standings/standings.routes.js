import { Router } from 'express';
import ttlService from '../../services/ttl/Ttl.service.js';
import TtlStrategy from '../../services/ttl/ttlStrategy.js';
import { cacheMiddleware } from '../../utils/middlewares/index.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

// /standings
const router = Router();
const basePath = '/standings';
const routeConfig = {
	route: '/',
	pathToCache: basePath,
	ttlStrategy: new TtlStrategy(10000)
};

ttlService.registerStrategy(routeConfig);


router.get(routeConfig.route, [cacheMiddleware(routeConfig)], cachedDataController);


export default router;


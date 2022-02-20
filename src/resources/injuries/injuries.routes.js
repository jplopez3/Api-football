import { Router } from 'express';
import ttlService from '../../services/ttl/Ttl.service.js';
import InjuriesTtl from './ttl/injuriesTtl.js';
import { cacheMiddleware } from '../../utils/middlewares/index.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

// /injuries
const basePath = '/injuries';
const injuriesRouteConfig = {
	route: '/',
	pathToCache: basePath,
	ttlStrategy: new InjuriesTtl(),
};
ttlService.registerStrategy(injuriesRouteConfig);
const router = Router();
router.get(
	injuriesRouteConfig.route,
	[cacheMiddleware(injuriesRouteConfig)],
	cachedDataController
);

export default router;

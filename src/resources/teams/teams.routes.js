import { Router } from 'express';
import cacheMiddleware from '../../utils/middlewares/cache.middleware.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';
// /teams
const basePath = '/teams';
const router = Router();
const teamsCacheMiddleware = cacheMiddleware({
	pathToCache: `${basePath}/statistics`,
	cacheStdTTL: 10000,
});

router.use(teamsCacheMiddleware);

router.get('/statistics', cachedDataController);

export default router;

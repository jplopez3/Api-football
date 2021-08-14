import { Router } from 'express';
import cacheMiddleware from '../../utils/middlewares/cache.middleware.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';
// /teams
const basePath = '/teams';
const router = Router();
const { getFromCache, saveInCache } = cacheMiddleware({
	pathToCache: `${basePath}/statistics`,
	cacheStdTTL: 10000,
});

router.use([getFromCache, saveInCache]);

router.get('/statistics', cachedDataController);

export default router;

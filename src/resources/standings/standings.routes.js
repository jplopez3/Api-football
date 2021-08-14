import { Router } from 'express';
import cacheMiddleware from '../../utils/middlewares/cache.middleware.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

// /standings
const router = Router();
const basePath = '/standings';
const { getFromCache, saveInCache } = cacheMiddleware({
	pathToCache: basePath,
});

router.use([getFromCache, saveInCache]);

router.get('/', cachedDataController);

export default router;

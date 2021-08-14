import { Router } from 'express';
import cacheMiddleware from '../../utils/middlewares/cache.middleware.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

// /injuries
const router = Router();
const basePath = '/injuries';
const { getFromCache, saveInCache } = cacheMiddleware({
	pathToCache: `${basePath}`,
	cacheStdTTL: 10000,
});

router.use([getFromCache, saveInCache]);
router.get('/', cachedDataController);

export default router;

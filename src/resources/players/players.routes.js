import { Router } from 'express';
import cacheMiddleware from '../../utils/middlewares/cache.middleware.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

// /players
const router = Router();
const basePath = '/players';

const { getFromCache, saveInCache } = cacheMiddleware({
	pathToCache: `${basePath}/topscorers`,
	cacheStdTTL: 10000,
});

router.use([getFromCache, saveInCache]);
router.get('/topscorers', cachedDataController);

export default router;

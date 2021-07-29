import { Router } from 'express';
import cacheMiddleware from '../../utils/middlewares/cache.middleware.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

// /players
const router = Router();
const basePath = '/players';
const topScorersCacheMiddleware = cacheMiddleware({
  pathToCache: `${basePath}/topscorers`,
  cacheStdTTL: 10000,
});

router.use(topScorersCacheMiddleware);
router.get('/topscorers', cachedDataController);

export default router;

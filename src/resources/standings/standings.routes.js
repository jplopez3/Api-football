import { Router } from 'express';
import cacheMiddleware from '../../utils/middlewares/cache.middleware.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

// /standings
const router = Router();
const basePath = '/standings';
const standingsCacheMiddleware = cacheMiddleware({
  pathToCache: basePath,
  cacheStdTTL: 10000,
});

router.use(standingsCacheMiddleware);

router.get('/', cachedDataController);

export default router;

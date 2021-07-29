import { Router } from 'express';
import cacheMiddleware from '../../utils/middlewares/cache.middleware.js';
import groupByCountryMiddleware from '../../utils/middlewares/groupByCountry.middleware.js';
import fixturesController from './fixtures.controller.js';
import cachedDataController from '../../utils/shared/controllers/cachedData.controller.js';

// /fixtures
const router = Router();
const basePath = '/fixtures';
const fixturesCacheMiddleware = cacheMiddleware({
  pathToCache: `${basePath}`,
  cacheStdTTL: 10000,
});
const statisticsCacheMiddleware = cacheMiddleware({
  pathToCache: `${basePath}/statistics`,
});
const headToHeadCacheMiddleware = cacheMiddleware({
  pathToCache: `${basePath}/headtohead`,
});

router.get(
  '/',
  [fixturesCacheMiddleware, groupByCountryMiddleware(['live', 'date'])],
  fixturesController,
);
router.get('/statistics', statisticsCacheMiddleware, cachedDataController);
router.get('/headtohead', headToHeadCacheMiddleware, cachedDataController);

export default router;

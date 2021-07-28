import { Router } from 'express';
import cacheMiddleware from '../../utils/middlewares/cache.middleware.js';
import groupByCountryMiddleware from '../../utils/middlewares/groupByCountry.middleware.js';
import fixturesController from './fixtures.controller.js';

// /fixtures
const router = Router();
const basePath = '/fixtures';
const fixturesCacheMiddleware = cacheMiddleware({
  pathToCache: basePath,
  cacheStdTTL: 10000,
});

router.use(fixturesCacheMiddleware);

router.get('/', groupByCountryMiddleware, fixturesController);
router.get('/statistics', fixturesController);
router.get('/headtohead', fixturesController);

export default router;

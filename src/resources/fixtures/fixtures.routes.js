import { Router } from 'express';
import cacheMiddleware from '../../utils/middlewares/cache.middleware.js';
import fixturesController from './fixtures.controller.js';

const router = Router();
const path = '/fixtures';

router.use(cacheMiddleware({ cacheName: path }));

router.get(path, fixturesController);

export default router;

import { Router } from 'express';
import { cacheMiddleware } from '../../utils/middlewares/index.js';
import leaguesController from './leagues.controller.js';
// /leagues
const basePath = '/leagues';
const routeConfig = {
	route: '/',
	pathToCache: basePath,
};

const router = Router();
router.get(
	routeConfig.route,
	[cacheMiddleware(routeConfig)],
	leaguesController
);

export default router;

import express from 'express';
import { Router } from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from './morgan.js';
import serverRoutes from '../server.routes.js';
import { DynamicRouterWithCache } from '../utils/dynamic_endpoint/index.js';
import superFixtures from '../resources/fixtures/fixtures.routes.js';
import Logger from './winston.js';

export default class App {
  constructor({ apiPath, endPoints, Fetcher, database }) {
    try {
      this.app = express();
      this.initMiddleware();
      this.initRoutes(endPoints, apiPath);
      this.initErrorHandling();
    } catch (error) {
      Logger.error('Error Starting Outscore: %O', error);
    }
  }
  initMiddleware() {
    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    this.app.use(cors());
    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    this.app.enable('trust proxy');

    this.app.disable('x-powered-by');

    // Use Morgan middle ware
    this.app.use(morgan);
    // Middleware that transforms the raw string of req.body into json
    //server.use(bodyParser.json());
    this.app.use(compression());
    /*app.use(`/.netlify/functions/api`, router);
      app.set('view engine', 'html');*/
  }
  initRoutes(cachedPathList, apiPath = '/') {
    Logger.warn('Initializing endpoints in %s');
    this._router = Router();
    this.app.use(apiPath, this._router);

    this._activeEndPoints = cachedPathList.map((pathConfig) => {
      const endPoint = new DynamicRouterWithCache(pathConfig);
      this._router.use(endPoint.router);
      return endPoint;
    });
    this._router.use(superFixtures);
    this.app.use('/', serverRoutes);
  }

  initErrorHandling() {
    this._router.use(function (req, res, next) {
      Logger.warn('Resource not found %O', req.path);
      res.status(404).json({ error: 'Resource not found' });
    });

    this._router.use(function (err, req, res, next) {
      Logger.error(err.stack);
      res.status(err.status || 500).render({ error: 'Something failed!' });
    });
  }
}

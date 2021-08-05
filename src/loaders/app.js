import express, { Router } from 'express';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import morgan from './morgan.js';
import {
  fixtures,
  players,
  outscore,
  standings,
  teams,
  betshelper,
  injuries,
} from '../resources/index.js';
import Logger from './winston.js';
import { apiPath } from '../config/outscore.js';

const __dirname = path.resolve(path.dirname('')) + '/src/';

export default class App {
  constructor() {
    try {
      this.app = express();
      this.initMiddleware();
      this.initRoutes(apiPath);
    } catch (error) {
      Logger.error('Error Starting Outscore: %O', error);
    }
  }
  initMiddleware() {
    // general config
    // this.app.set('views', path.join(__dirname, 'views'));
    //this.app.set('view engine', 'html');
    // this.app.use(express.static(path.join(__dirname, 'public')))

    // Use Morgan middle ware
    this.app.use(morgan);

    this.app.enable('verbose errors');

    // disable them in production
    // use $ NODE_ENV=production node examples/error-pages
    if (this.app.settings.env === 'production') {
      this.app.disable('verbose errors');
    }

    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    this.app.use(cors());
    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    this.app.enable('trust proxy');
    this.app.disable('x-powered-by');
    // Middleware that transforms the raw string of req.body into json
    //server.use(bodyParser.json());
    this.app.use(compression());
    /* app.set('view engine', 'html');*/
  }
  initRoutes(apiPath = '/') {
    Logger.warn('Initializing endpoints in %s', apiPath);
    this.ApiV3Router = Router();
    this.ApiV3Router.use('/fixtures', fixtures);
    this.ApiV3Router.use('/standings', standings);
    this.ApiV3Router.use('/players', players);
    this.ApiV3Router.use('/admin', outscore);
    this.ApiV3Router.use('/teams', teams);
    this.ApiV3Router.use('/betshelper', betshelper);
    this.ApiV3Router.use('/injuries', injuries);
    this.initErrorHandling(this.ApiV3Router);
    this.app.use(apiPath, this.ApiV3Router);
  }

  initErrorHandling(route) {
    //Todo: move logic to middlewares
    // Error handlers
    route.use(function (req, res, next) {
      Logger.warn('Resource not found %s', req.path);
      res.status(404);
      res.json({ error: 'Resource not found' });
    });

    route.use(function (err, req, res, next) {
      // we may use properties of the error object
      // here and next(err) appropriately, or if
      // we possibly recovered from the error, simply next().
      Logger.error(
        'ErrorHandling Middleware Status: %s - Error: %o',
        err.status,
        err,
      );
      res.status(500);
      if (err?.type === 'Football API') {
        res.json({ error: err });
      } else {
        res.json({ error: 'Something failed!' });
      }
    });
    Logger.info('initializing error handling');
  }
}

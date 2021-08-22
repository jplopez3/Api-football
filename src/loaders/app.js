import express, { Router } from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import corsOptions from './cors.js';
//import bodyParser from 'bodyParser';
import morgan from './morgan.js';
import {
	outscore,
	fixtures,
	players,
	standings,
	teams,
	betshelper,
	injuries,
} from '../resources/index.js';
import {
	notFoundError,
	serverError,
} from '../utils/middlewares/errors/index.js';
import Logger from './winston.js';
import { apiPath } from '../config/constants.js';

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
		// View engine config
		this.app.set('view engine', 'ejs');
		this.app.set('views', path.join(__dirname, 'views'));
		this.app.use(express.static(path.join(__dirname, 'public/')));

		// Use Morgan logger middle ware
		this.app.use(morgan);

		//enable verbose errors
		this.app.enable('verbose errors');
		// disable them in production
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
		//this.app.use(bodyParser.json());
		this.app.use(compression());
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
		this.app.use('/', outscore);
		this.initErrorHandling(this.app);
	}

	initErrorHandling(route) {
		// Error handlers
		Logger.info('initializing error handling');
		route.use(notFoundError);
		route.use(serverError);
	}
}

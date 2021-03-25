import express from 'express';
import compression from 'compression';
import morgan from './morgan.js';
const server = express();
const router = express.Router();
import cors from 'cors';

//TODO:add to config? files
/*app.use(`/.netlify/functions/api`, router);
 app.set('view engine', 'html');*/

// Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// It shows the real origin IP in the heroku or Cloudwatch logs
server.enable('trust proxy');

// The magic package that prevents frontend developers going nuts
// Alternate description:
// Enable Cross Origin Resource Sharing to all origins by default
server.use(cors());
// Use Morgan middle ware
server.use(morgan);
// Middleware that transforms the raw string of req.body into json
//server.use(bodyParser.json());
server.use(compression());
export { server, router };

import express from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from './morgan.js';
import outscore from '../resources/outscore/Outscore.js';
import serverRoutes from '../resources/server/server.routes.js';
import outscoreRoutes from '../resources/outscore/outscore.endpoints.js';
const server = express();

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

//Register outscore routes in server
server.use(outscore.router);
server.use(outscoreRoutes);

server.use(serverRoutes);

export { server };

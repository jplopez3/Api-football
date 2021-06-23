import express from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from './morgan.js';
import outscore from '../resources/outscore/Outscore.js';
import serverRoutes from '../server.routes.js';
import outscoreRoutes from '../resources/outscore/outscore.endpoints.js';
const app = express();

//TODO:add to config? files
/*app.use(`/.netlify/functions/api`, router);
 app.set('view engine', 'html');*/

// Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// It shows the real origin IP in the heroku or Cloudwatch logs
app.enable('trust proxy');

// The magic package that prevents frontend developers going nuts
// Alternate description:
// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());
// Use Morgan middle ware
app.use(morgan);
// Middleware that transforms the raw string of req.body into json
//server.use(bodyParser.json());
app.use(compression());

//Register outscore routes in server
app.use(outscore.router);
app.use(outscoreRoutes);

app.use(serverRoutes);

export default app;

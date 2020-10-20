import express from 'express';
const server = express();
const router = express.Router();
import bodyParser from 'body-parser';
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
  // Middleware that transforms the raw string of req.body into json
  //server.use(bodyParser.json());
 export {server, router};
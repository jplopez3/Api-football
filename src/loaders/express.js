import express from 'express';
const app = express();
const router = express.Router();

 //TODO:add to config? files
 /*app.use(`/.netlify/functions/api`, router);
 app.set('view engine', 'html');*/

 export {app, router};
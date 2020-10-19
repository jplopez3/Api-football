import express from 'express';
const server = express();
const router = express.Router();

 //TODO:add to config? files
 /*app.use(`/.netlify/functions/api`, router);
 app.set('view engine', 'html');*/

 export {server, router};
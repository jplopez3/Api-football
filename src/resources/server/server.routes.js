import { Router } from 'express';
import Logger from '../../loaders/winston.js';
const router = Router();

router.get('/ping', (req, res) => {
  throw new Error('Ostia!!');
  res.status(200).end('pong');
});
router.head('/status', (req, res) => {
  res.status(200).end();
});

//Todo: remove
router.get('/env', function (req, res) {
  res.json(process.env);
});
router.use(function (req, res, next) {
  Logger.warn('Resource not found %O', req.path);
  res.status(404).json({ error: 'Resource not found' });
});
router.use(function (err, req, res, next) {
  Logger.error(err.stack);
  res.status(err.status || 500).render({ error: 'Something failed!' });
});

export default router;

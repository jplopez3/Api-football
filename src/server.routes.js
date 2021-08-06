import { Router } from 'express';
import Logger from './loaders/winston.js';
const router = Router();

//Todo: remove
router.get('/env', function (req, res) {
	res.json(process.env);
});
//Todo: remove
router.get('/error', (req, res) => {
	throw new Error('Ostia!!');
	res.status(200).end();
});

router.get('/ping', (req, res) => {
	res.status(200).end('pong');
});
router.use(function (req, res, next) {
	Logger.warn('Resource not found %O', req.path);
	res.status(404).json({ error: 'Resource not found' });
});
router.use(function (err, req, res, next) {
	Logger.error('Error boys', err.stack);
	res.status(err.status || 500).json({ error: 'Something failed!' });
});
export default router;

import Logger from '../winston.js';
// eslint-disable-next-line no-unused-vars
export default (req, res, next) => {
	Logger.warn('Resource not found %s', req.path);
	res.status(404);
	res.json({ error: 'Resource not found' });
};

import Logger from '../winston.js';

// eslint-disable-next-line no-unused-vars
export default (err, req, res, next) => {
	// we may use properties of the error object
	// here and next(err) appropriately, or if
	// we possibly recovered from the error, simply next().
	Logger.error(
		'ErrorHandling Middleware Status: %s - Error: %o',
		err.type,
		err
	);
	res.status(500);
	if (err?.type === 'rapidApi') {
		res.json({ error: err.error });
	} else {
		res.json({ error: 'Something failed!' });
	}
};

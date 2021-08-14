import Logger from '../../loaders/winston.js';

export default function (requiredQS = null) {
	Logger.info('Start validateRequest middleware.js %O', requiredQS);
	return (req, res, next) => {
		const result = isValidRequest(req, requiredQS);

		if (result.length > 0) {
			Logger.warn(`Missing required fields: [${result.toString()}]`);
			res.status(400);
			next(`Missing required fields: [${result.toString()}]`);
			return;
		}

		next();
	};
}

const isValidRequest = (req, requiredQS) => {
	const missingParams = requiredQS.filter((field) => {
		return !req.query[field];
	});

	return missingParams;
};

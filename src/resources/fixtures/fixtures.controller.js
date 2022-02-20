import Logger from '../../loaders/winston.js';
import fixturesService from '../../services/fixtures/Fixtures.service.js';

export default async (req, res, next) => {
	try {
		const queryParams = req.query ? req.query : {};
		const data =
			res.locals.cachedData || (await fixturesService.get(queryParams));
		res.status(200).json(data);
	} catch (error) {
		Logger.error('Fixtures.controller.js  %O', error);
		next(error);
	}
};

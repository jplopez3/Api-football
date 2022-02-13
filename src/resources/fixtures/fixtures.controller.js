import Logger from '../../loaders/winston.js';
import FixturesService from '../../services/fixtures/Fixtures.service.js';

const baseUrl = '/fixtures';
const fixturesService = new FixturesService(baseUrl);
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

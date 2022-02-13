import Logger from '../../loaders/winston.js';
import FixturesService from '../../services/fixtures/Fixtures.service.js';

const baseUrl = '/fixtures';
const fixturesService = new FixturesService(baseUrl);
export default async (req, res, next) => {
	try {
		const queryParams = req.query ? req.query : {};
		const data =
			res.locals.cachedData || (await getFromFixtureService(queryParams));
		res.status(200).json(data);
	} catch (error) {
		Logger.error('Fixtures.controller.js  %O', error);
		next(error);
	}
};

const getFromFixtureService = async (params) => {
	const fixtureType = getRequestFixtureType(params);

	let data;

	switch (fixtureType) {
		case 'live':
			data = await fixturesService.getFixturesByTeam(params);
			break;
		case 'id':
			data = await fixturesService.getFixturesById(params);
			break;
		case 'date':
			data = await fixturesService.getFixturesByDate(params);
			break;
		default:
			data = await fixturesService.getFixture(params);
			break;
	}
	return data;
};
const getRequestFixtureType = (query) => {
	const reqTypes = ['id', 'date', 'team'];
	const queries = Object.keys(query);
	return queries.find((query) => reqTypes.includes(query));
};

import Logger from '../../loaders/winston.js';
import fixturesService from '../../services/fixtures/Fixtures.service.js';
import BetsHelperService from '../../services/betsHelper/BetsHelper.service.js';
import fixturesHelper from '../../utils/fixturesHelper.js';

export default async (req, res, next) => {
	try {
		const queryParams = req.query ? req.query : {};
		const data = await fixturesService.get(queryParams);
		let isBetsHelperInCache;

		if ('id' in queryParams) {
			const { home, away } = fixturesHelper.getTeamIds(data.response);
			isBetsHelperInCache = BetsHelperService.isInCache({ home, away });
		}

		const response = mapResponse(data, isBetsHelperInCache);
		res.status(200).json(response);
	} catch (error) {
		Logger.error('Fixtures.controller.js  %O', error);
		next(error);
	}
};

const mapResponse = (data, isBetsHelperInCache) => {
	return {
		...data,
		...(isBetsHelperInCache !== undefined && { isBetsHelperInCache }),
	};
};

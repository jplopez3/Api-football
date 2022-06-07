import Logger from '../../loaders/winston.js';
import fixturesService from '../../services/fixtures/Fixtures.service.js';
import BetsHelperService from '../../services/betsHelper/BetsHelper.service.js';

export default async (req, res, next) => {
	try {
		const queryParams = req.query ? req.query : {};
		const data =
			res.locals.cachedData || (await fixturesService.get(queryParams));
		//TODO: move to fixtures helper
		let isBetsHelperInCache = false;
		if(data.response){
			const away = data.response[0].teams.away.id;
			const home = data.response[0].teams.home.id;
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
		isBetsHelperInCache,
	};
};

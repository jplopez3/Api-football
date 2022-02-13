import FootballApiService from '../../services/fapi/footballApi.service.js';
import Logger from '../../loaders/winston.js';

export default function ({ pathToCache }) {
	//todo: move to loader
	const fapi = new FootballApiService(pathToCache);

	const cacheMiddleWare = async (req, res, next) => {
		const query = req.query ? req.query : {};
		try {
			const data = await fapi.get(query, pathToCache);
			res.locals.cachedData = data;
			next();
		} catch (error) {
			Logger.error('Catch getFromCache middleware %O', error);
			next(error);
		}
	};

	return cacheMiddleWare;
}

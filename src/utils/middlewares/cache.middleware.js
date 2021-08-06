import CacheFactory from '../cache/CacheFactory.js';
import { Fetcher } from '../../loaders/axios/index.js';
import Logger from '../../loaders/winston.js';

export default function ({ pathToCache, cacheStdTTL }) {
	const cache = CacheFactory.create({ pathToCache, cacheStdTTL });
	return async function (req, res, next) {
		Logger.info('0 - Request Start: %s', req.originalUrl);
		const { cacheKey, queryParams, apiFootballURL } = processRequest(
			req,
			cache
		);

		try {
			let data = await cache.get(cacheKey);

			if (!data) {
				data = await Fetcher(apiFootballURL, queryParams);

				//Todo: implement in controller
				const isliveOrDate = Object.keys(req.query).some((key) =>
					['live', 'date'].includes(key)
				);
				const ttl = isliveOrDate ? 15 : '';
				cache.set({ cacheKey, data , ttl });
			}

			res.locals.cachedData = data;
			res.locals.cacheKey = cacheKey;

			next();
		} catch (error) {
			Logger.error('Catch runService %O', error);
			next(error);
		}
	};
}

const processRequest = (req, cache) => {
	Logger.info('1 - Process Request:', req.query);
	if (req.query['clearCache']) {
		cache.flushCache();
		//Todo: cache flush response
		//return this.responseSuccess({ data: { result: 'CLEAR CACHE SUCCESS' } });
	}

	const queryParams = req.query ? req.query : {};
	const cacheKey = `${cache.pathToCache}${req.url}`; // here cache key will be: req.method + req.url + req.user
	const apiFootballURL = `${cache.pathToCache}`;

	return {
		queryParams,
		cacheKey,
		apiFootballURL,
	};
};

import CacheFactory from '../cache/CacheFactory.js';
import {
	getUpdatedDataFromCache,
	saveDataInCache,
} from '../../repositories/footballApi.cache.js';
import Logger from '../../loaders/winston.js';

export default function ({ pathToCache, cacheStdTTL }) {
	const cache = CacheFactory.create({ pathToCache, cacheStdTTL });

	const getFromCache = async (req, res, next) => {
		try {
			const queryParams = req.query ? req.query : {};
			const { data, cacheKey } = await getUpdatedDataFromCache(
				cache,
				queryParams
			);
			res.locals.cachedData = data;
			res.locals.cacheKey = cacheKey;
			next();
		} catch (error) {
			Logger.error('Catch runService %O', error);
			next(error);
		}
	};
	const saveInCache = (req, res, next) => {
		if (hasDataToCache(res)) {
			const queryParams = req.query ? req.query : {};
			saveDataInCache(
				cache,
				queryParams,
				res.locals.cachedData,
				cacheStdTTL
			);
			next();
		} else {
			next('No data to cache');
		}
	};

	return { getFromCache, saveInCache };
}

export const hasDataToCache = (res) => {
	return res.locals?.cachedData || res.locals?.cachedData?.response;
};

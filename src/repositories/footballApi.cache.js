import Fetcher from '../utils/fetcher.js';
import Logger from '../loaders/winston.js';

const getUpdatedDataFromCache = async (cache, queryString) => {
	const cacheKey = cache.getCacheKey(queryString);
	const apiFootballURL = cache.pathToCache;
	let expired = false;

	try {
		let data = await cache.get(cacheKey);

		if (!data) {
			expired = true;
			data = await Fetcher(apiFootballURL, queryString);
			
		}

		return {
			data,
			cacheKey,
			expired,
		};
	} catch (error) {
		Logger.error('Catch getUpdatedDataFromCache %O', error);
		throw error;
	}
};

const saveDataInCache = (cache, queryString, data, ttl) => {
	const cacheKey = cache.getCacheKey(queryString);

	return cache.set({ cacheKey, data, ttl });
};

const getDataFromDB = () => {
	Logger.error('getDataFromDB to be done!');
};
const saveDataInDB = () => {
	Logger.error('saveDataInDB to be done!');
};

export {
	getUpdatedDataFromCache,
	saveDataInCache,
	saveDataInDB,
	getDataFromDB,
};

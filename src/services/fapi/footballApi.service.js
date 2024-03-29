import Fetcher from '../../repositories/FootballApi.repository.js';
import ttlService from '../../services/ttl/Ttl.service.js';
import cacheFactory from '../../repositories/cache/cache.factory.js';
import Logger from '../../loaders/winston.js';

class FootballApiService {
	constructor(pathToCache) {
		this.fetcher = new Fetcher(pathToCache);
		this.cache = cacheFactory.hasCache(pathToCache)
			? cacheFactory.get(pathToCache)
			: cacheFactory.create(pathToCache);

		Logger.info(
			'Initializing FootballApiService for path: %s',
			pathToCache
		);
	}

	async fetchFromApi(params) {
		return await this.fetcher.get(params);
	}
	getTTL({ params, data, ttlStrategyName }) {
		try {
			return ttlService
				.getStrategy(ttlStrategyName)
				.getInSeconds({ params, data });
		} catch (error) {
			Logger.error('4 - Error getting ttl time %O', error);
			return 60;
		}
	}

	getFromCache(params) {
		return this.cache.get(params);
	}

	async get(params) {
		this.deleteCache(params);
		let data = this.getFromCache(params);

		if (!data) {
			data = await this.fetchFromApi(params);
			const ttl = this.getTTL({
				params,
				data,
				ttlStrategyName: this.cache.baseUrl,
			});
			this.cache.set({ params, data, ttl });
		}

		return data;
	}

	hasCache(params) {
		return this.cache.hasCache(params);
	}

	deleteCache(params) {
		if ('deleteCache' in params) {
			delete params.deleteCache;
			this.cache.delete(params);
		}
	}
}

export default FootballApiService;

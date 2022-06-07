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

	saveInCache(params, data, ttlStrategyName) {
		const ttl = ttlService
			.getStrategy(ttlStrategyName)
			.getInSeconds({ params, data });
		this.cache.set({ params, data, ttl });
	}
	async get(params) {
		let data = this.cache.get(params);

		if (!data) {
			data = await this.fetchFromApi(params);
			const ttlStrategyName = this.cache.baseUrl;
			this.saveInCache(params, data, ttlStrategyName);
		}

		return data;
	}

	hasCache(params) {
		return this.cache.hasCache(params);
	}
}

export default FootballApiService;

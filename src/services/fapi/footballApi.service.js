import fetcher from '../../repositories/FootballApi.repository.js';
import ttlService from '../../services/ttl/Ttl.service.js';
import CacheRepository from '../../repositories/Cache.repository.js';
import Logger from '../../loaders/winston.js';

class FootballApiService {
	constructor(pathToCache) {
		this.fetcher = fetcher;
		this.cache = new CacheRepository(pathToCache);
		this.ttlService = ttlService;
		this.instance = this;
		Logger.info(
			'Initializing FootballApiService for path: %s',
			pathToCache
		);
	}

	async fetchFromApi(params) {
		return await this.fetcher(this.cache.baseUrl, params);
	}

	saveInCache(params, data, ttlStrategyName) {
		const ttl = this.ttlService
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
}

export default FootballApiService;

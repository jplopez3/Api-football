class FootballApiService {
	constructor(FootballApiRepository, Cache) {
		this.fetcher = FootballApiRepository;
		this.cache = Cache;
	}

	getFromCache(queryParams) {
		return this.cache.get(queryParams);
	}
	async fetchFromApi(params) {
		return await this.fetcher(this.cache.pathToCache, params);
	}

	async get(params) {
		let data = this.getFromCache(params);

		if (!data) {
			data = await this.fetchFromApi(params);

			//todo: get ttl from ttl service
			const ttl = 123;
			this.cache.set({ params, data, ttl });
		}

		return data;
	}
}

export default FootballApiService;

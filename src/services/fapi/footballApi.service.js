class FootballApiService {
	constructor(FootballApiRepository, Cache, ttlService) {
		this.fetcher = FootballApiRepository;
		this.cache = Cache;
		this.ttlService = ttlService;
	}

	async fetchFromApi(params) {
		return await this.fetcher(this.cache.pathToCache, params);
	}

	async get(params, baseUrl) {
		let data = this.cache.get(params);

		if (!data) {
			data = await this.fetchFromApi(params);

			const ttl = this.ttlService.getStrategy(baseUrl).getInSeconds();
			this.cache.set({ params, data, ttl });
		}

		return data;
	}
}

export default FootballApiService;

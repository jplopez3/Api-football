import FootballApiService from '../../services/fapi/footballApi.service.js';
import dataBase from '../../repositories/Mongo.repository.js';
import ttlService from '../../services/ttl/Ttl.service.js';
import {
	FixturesByDateTTL,
	FixtureByIdTTL,
	Head2headTTL,
	LiveFixtures,
} from '../../resources/fixtures/ttl/index.js';

registerTTLStrategies([FixturesByDateTTL, FixtureByIdTTL, Head2headTTL, LiveFixtures]);

class FixturesService {
	constructor(baseUrl) {
		this.fapi = new FootballApiService(baseUrl);
		this.initDataBase();
	}
	async get(params){
		return await this.getUpdatedDataFromDB(params);
	}
	getTtlStrategyName(fixtureType){
		const config = {
			id:'FixtureByIdTTL',
			team:'FixturesByTeam',
			date:'FixturesByDateTTL',
			live: 'LiveFixtures',
		};
		return config[fixtureType];
	}
	async getUpdatedDataFromDB(params) {
		//check cache
		let data = await this.fapi.cache.get(params);
		if (!data) {
			//check db
			//fecth from fapi
			data = await this.fapi.get(params);
			//save in cache
			this.fapi.saveInCache(params, data, this.getTtlStrategyName(getRequestFixtureType(params)));

		}

		return data;
	}
	async getFixture(params) {
		return await this.fapi.get(params);
	}
	async initDataBase() {
		this.fixturesDataBase = new dataBase('fixtures');
		await this.fixturesDataBase.init();
		const collection = this.fixturesDataBase.getCollection();
		collection.createIndex({ date: 1 }, { unique: true });
		collection.createIndex({ expireAt: 1 }, { expireAfterSeconds: 5 });
	}
}

export default FixturesService;
const getRequestFixtureType = (query) => {
	const reqTypes = ['id', 'date', 'team', 'live'];
	const queries = Object.keys(query);
	return queries.find((query) => reqTypes.includes(query));
};

function registerTTLStrategies(ttlStrategies) {
	ttlStrategies.forEach((TtlStrategy) => {
		const ttlStrategy = new TtlStrategy();
		const config = {
			pathToCache: ttlStrategy.constructor.name,
			ttlStrategy: ttlStrategy,
		};
		ttlService.registerStrategy(config);
	});
}
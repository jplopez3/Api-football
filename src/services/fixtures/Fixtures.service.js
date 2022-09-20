import FootballApiService from '../../services/fapi/footballApi.service.js';
import dataBase from '../../repositories/Mongo.repository.js';
import groupByCountry from '../../utils/group_by_country/groupByCountry.js';

class FixturesService extends FootballApiService {
	constructor(baseUrl = '/fixtures') {
		super(baseUrl);
		this.fixturesTypesToGroup = ['date', 'live'];
		this.initDataBase();
	}
	async get(params) {
		return await this.getUpdatedDataFromDB(params);
	}
	//TODO: maybe move to ttl service
	getTtlStrategyName(fixtureType) {
		const config = {
			id: 'FixtureByIdTTL',
			team: 'FixturesByTeam',
			date: 'FixturesByDateTTL',
			live: 'LiveFixtures',
		};
		return config[fixtureType];
	}
	async getUpdatedDataFromDB(params) {
		const hasGroupByParam = params.hasOwnProperty('groupBy') ? delete params.groupBy : false;
		
		//check cache
		let data = await this.getFromCache(params);
		if (!data) {
			//check db
			//fecth from fapi
			data = await this.fetchFromApi(params);
			const fixtureType = getRequestFixtureType(params);

			if (!hasGroupByParam && this.fixturesTypesToGroup.includes(fixtureType)) {
				data = groupByCountry(data);
			}

			//save in cache
			this.saveInCache(
				params,
				data,
				this.getTtlStrategyName(fixtureType)
			);
		}

		return data;
	}

	async initDataBase() {
		this.fixturesDataBase = new dataBase('fixtures');
		await this.fixturesDataBase.init();
		const collection = this.fixturesDataBase.getCollection();
		collection.createIndex({ date: 1 }, { unique: true });
		collection.createIndex({ expireAt: 1 }, { expireAfterSeconds: 5 });
	}
}

export default new FixturesService();

const getRequestFixtureType = (query) => {
	const reqTypes = ['id', 'date', 'team', 'live'];
	const queries = Object.keys(query);
	return queries.find((query) => reqTypes.includes(query));
};

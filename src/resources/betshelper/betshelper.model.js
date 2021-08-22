import cacheFactory from '../../utils/cache/CacheFactory.js';
import { getUpdatedDataFromCache } from '../../repositories/footballApi.cache.js';

const fixturesCache = cacheFactory.get('/fixtures');
const headToHeadCache = cacheFactory.get('/fixtures/headtohead');

export default class BetsHelper {
	constructor(last = 5) {
		this.last = last;
	}
	getFixturesByTeam(teamId) {
		const fixturesParams = {
			last: this.last,
			team: teamId,
			status: 'FT',
		};

		return getUpdatedDataFromCache(fixturesCache, fixturesParams, true);
	}
	getFixturesById(fixtureId) {
		const fixturesParams = {
			id: fixtureId,
		};

		return getUpdatedDataFromCache(fixturesCache, fixturesParams, true);
	}
	getH2H({ home, away }) {
		const h2hParams = {
			h2h: `${home}-${away}`,
			last: this.last,
			status: 'FT',
		};

		return getUpdatedDataFromCache(headToHeadCache, h2hParams, true);
	}
	getFixturesID(fixturesResponse) {
		return fixturesResponse.response.reduce((fixturesIDList, match) => {
			fixturesIDList.push(match.fixture.id);
			return fixturesIDList;
		}, []);
	}
	getFixturesByIdList(fixturesIdList) {
		const promises = fixturesIdList.map((id) => this.getFixturesById(id));

		return Promise.all(promises).then((results) =>
			results.map((result) => {
				const [response] = result.data.response;
				return response;
			})
		);
	}
}
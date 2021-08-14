import cacheFactory from '../../utils/cache/CacheFactory.js';
import { getUpdatedDataFromCache } from '../../repositories/footballApi.cache.js';

const fixturesCache = cacheFactory.get('/fixtures');
const headToHeadCache = cacheFactory.get('/fixtures/headtohead');

class BetsHelper {
	constructor(last = 5) {
		this.last = last;
	}
	getFixturesByTeam(TeamId) {
		const fixturesParams = {
			last: this.last,
			team: TeamId,
			status: 'FT',
		};

		return getUpdatedDataFromCache(fixturesCache, fixturesParams);
	}
	getFixturesById(fixtureId) {
		const fixturesParams = {
			id: fixtureId,
		};

		return getUpdatedDataFromCache(fixturesCache, fixturesParams);
	}
	getH2H({ home, away }) {
		const h2hParams = {
			h2h: `${home}-${away}`,
			last: this.last,
			status: 'FT',
		};

		return getUpdatedDataFromCache(headToHeadCache, h2hParams);
	}
	getFixturesID(fixturesResponse) {
		return fixturesResponse.response.reduce((fixturesIDList, match) => {
			fixturesIDList.push(match.fixture.id);
			return fixturesIDList;
		}, []);
	}
	getFixturesByIdList(fixturesIdList) {
		const promises = fixturesIdList.map((id) => this.getFixturesById(id));

		return Promise.all(promises).then((result) =>
			result.map((res) => {
				const [response] = res.data.response;
				return response;
			})
		);
	}
}

export default BetsHelper;

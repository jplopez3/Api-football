import cacheFactory from '../../utils/cache/CacheFactory.js';
import { Fetcher } from '../../loaders/axios/index.js';
import Logger from '../../loaders/winston.js';

const fixturesCache = cacheFactory.get('/fixtures');
const headToHeadCache = cacheFactory.get('/fixtures/headtohead');

class BetsHelper {
  constructor(last = 3) {
    this.last = last;
  }
  async getFixturesByTeam(TeamId) {
    const fixturesParams = {
      last: this.last,
      team: TeamId,
      status: 'FT',
    };

    return getData(
      fixturesCache,
      `?team=${TeamId}&last=${this.last}&status=FT`,
      fixturesParams,
    );
  }
  async getFixturesById(fixtureId) {
    const fixturesParams = {
      id: fixtureId,
    };

    return getData(fixturesCache, `?id=${fixtureId}`, fixturesParams);
  }
  async getH2H({ home, away }) {
    const queryString = `?h2h=${home}-${away}&last=${this.last}`;
    const h2hParams = {
      h2h: `${home}-${away}`,
      last: this.last,
    };

    return getData(headToHeadCache, queryString, h2hParams);
  }
  getFixturesID = (fixturesResponse) =>
    fixturesResponse.response.reduce((fixturesIDList, match) => {
      fixturesIDList.push(match.fixture.id);
      return fixturesIDList;
    }, []);
  getFixturesByIdList(fixturesIdList) {
    const promises = fixturesIdList.map((id) =>
      new Promise((resolve, reject) => {
        this.getFixturesById(id)
          .then((result) => resolve(result))
          .catch((err) => {
            reject(err);
          });
      }).catch((err) => {
        throw err;
      }),
    );

    return Promise.all(promises)
      .then((result) => {
        const resultResponses = result.map(({ response }) => response[0]);
        return resultResponses;
      })
      .catch((err) => {
        throw err;
      });
  }
}

//Todo: this code is duplicated in cache middleware
const getData = async (cache, queryString, queryParams) => {
  const cacheKey = `${cache.pathToCache}${queryString}`;
  let data = await cache.get(cacheKey);

  if (!data) {
    data = await Fetcher(cache.pathToCache, queryParams);
    cache.set({ cacheKey, data });
  }
  return data;
};

export { BetsHelper, getData };

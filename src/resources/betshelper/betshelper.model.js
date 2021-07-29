import cacheFactory from '../../utils/cache/CacheFactory.js';
import { Fetcher } from '../../loaders/axios/index.js';
import Logger from '../../loaders/winston.js';

class Response {
    constructor({ homeData, awayData, h2hData }) {
      const home = homeData.response;
      const away = awayData.response;
      const h2h = h2hData.response;
  
      this.response = {
        home,
        away,
        h2h,
      };
    }
  
    get final() {
      return this.response;
    }
  }
  
  class BetsHelper {
    constructor(home, away) {
      this.home = home;
      this.away = away;
  
      this.fixturesParams = {
        last: 5,
        team: 0,
      };
  
      this.h2hParams = {
        h2h: '',
      };
    }
  
    get fixturesAway() {
      this.fixturesParams.team = this.away;
      return this.fixturesParams;
    }
  
    get fixturesHome() {
      this.fixturesParams.team = this.home;
      return this.fixturesParams;
    }
  
    get h2h() {
      this.h2hParams.h2h = `${this.home}-${this.away}`;
      return this.h2hParams;
    }
  
    fixturesQueryString(id) {
      return `?team=${id}&last=5`
    }
  
    get h2hQueryString() {
      return `?h2h=${this.home}-${this.away}`
    }
  }

  const getData = async (cache, queryString, queryParams) => {
    const cacheKey = `${cache.pathToCache}${queryString}`
    let data = await cache.get(cacheKey);
  
    if (!data) {
      data = await Fetcher(cache.pathToCache, queryParams);
      cache.set({ cacheKey, data });
    }
    return data;
  };

  export {BetsHelper, Response, getData};
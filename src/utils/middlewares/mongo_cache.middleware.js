import CacheFactory from '../cache/CacheFactory.js';
// import { Fetcher } from '../../loaders/axios/index.js'; //mongo db
import Logger from '../../loaders/winston.js';

export default function ({ pathToCache, cacheStdTTL }) {
  const cache = CacheFactory.create({ pathToCache, cacheStdTTL });
  return async function (req, res, next) {
    const { cacheKey, queryParams, apiFootballURL } = processRequest(
      req,
      cache,
    );

    try {
      let data = await cache.get(cacheKey);

      if (!data) {
        //try to find in mongo
        //fetch from server
        // data = await Fetcher(apiFootballURL, queryParams);
        //Save data in cacheKey
        //Save data in mongo
        cache.set({ cacheKey, data });
      }

      res.locals.cachedData = data;
      res.locals.cacheKey = cacheKey;

      next();
    } catch (error) {
      Logger.error('Catch runService %O', error);
      next(error);
    }
  };
}

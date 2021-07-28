import CacheFactory from '../cache/CacheFactory.js';
import { Fetcher } from '../../loaders/axios/index.js';
import Logger from '../../loaders/winston.js';

export default function ({ pathToCache, cacheStdTTL }) {
  const cache = CacheFactory.create({ pathToCache, cacheStdTTL });
  return async function (req, res, next) {
    Logger.info('0 - Request Start: %s', req.originalUrl);
    const { cacheKey, queryParams, apiFootballURL } = processRequest(
      req,
      cache,
    );
    Logger.info('Request: %O', cacheKey);

    try {
      let data = await cache.get(cacheKey);

      if (!data) {
        data = await Fetcher(apiFootballURL, queryParams);
        cache.set({ cacheKey, data });
      }

      res.locals.cachedData = data;
      next();
    } catch (error) {
      Logger.error('Catch runService %O', error);
      next(error);
    }
  };
}

const processRequest = (req, cache) => {
  Logger.info('1 - Process Request:', req.query);
  if (req.query['clearCache']) {
    cache.flushCache();
    //Todo: cache flush response
    //return this.responseSuccess({ data: { result: 'CLEAR CACHE SUCCESS' } });
  }
  if (req.query['groupBy']) {
    Logger.warn('groupBy');
    delete req.query['groupBy'];
  }

  const queryParams = {};
  const cacheKey = `${req.method}${cache.pathToCache}${req.url}`; // here cache key will be: req.method + req.url + req.user
  const apiFootballURL = `${cache.pathToCache}${req.url}`;

  queryParams['params'] = req.query ? req.query : {};

  return {
    queryParams,
    cacheKey,
    apiFootballURL,
  };
};

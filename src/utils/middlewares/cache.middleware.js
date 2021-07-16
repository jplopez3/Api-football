import CacheFactory from '../cache/CacheFactory.js';
import { Fetcher } from '../../loaders/axios/index.js';
import { groupByCountry } from '../group_by_country/groupByCountry.js';
import Logger from '../../loaders/winston.js'; 

let reqGroupByCountry = false
export default  function ({ cacheName, cacheTTL}) {
    const cache = CacheFactory.create({ cacheName, cacheTTL });
    return async function (req, res, next) {
        Logger.info('0 - Request Start: %s, %s', req.path);
        const { cacheKey, queryParams } = processRequest(req);
        Logger.info('Request: %O', cacheKey);

        try {
            let data = await cache.get(cacheKey);
               if (!data) {
                data = await Fetcher(req.path, queryParams); // here cache key will be: req.method + req.url + req.user
                cache.set({ cacheKey, data });
            }
            res.locals.cachedData = reqGroupByCountry ? groupByCountry(data) : data;
            reqGroupByCountry = false
            next();
        } catch (error) {
        Logger.error('Catch runService %O', error);
        next(error);
        }
        
      };
}

const processRequest = (req) =>{
    Logger.info('1 - Process Request:', req.query);
    if (req.query['clearCache']) {
      this.cache.flushCache();
      return this.responseSuccess({ data: { result: 'CLEAR CACHE SUCCESS' } });
    }
    if (req.query['groupBy']) {
      Logger.warn('groupBy');
      reqGroupByCountry = true;
      delete req.query['groupBy'];
    }

    const queryParams = {};
    queryParams['params'] = req.query ? req.query : {};

    return {
      queryParams,
      cacheKey: req.url,
    };
  }
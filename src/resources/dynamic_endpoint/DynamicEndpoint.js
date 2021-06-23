import AbstractRouter from '../../utils/AbstractRouter.js';
import CacheFactory from '../../utils/cache/CacheFactory.js';
import { Fetcher } from '../../loaders/axios/index.js';
import Logger from '../../loaders/winston.js';

import { groupByCountry } from '../../resources/fixtures/index.js';

export default class DynamicEndpoint extends AbstractRouter {
  constructor({ cacheStdTTL = null, path }) {
    super(path);
    this.path = path;
    this.cache = CacheFactory.create({ cacheName: this.path, cacheStdTTL });
  }

  async runService(req, res) {
    Logger.info('0 - Request Start: %s', this.path);
    const { cacheKey, queryParams } = this.processRequest(req);
    Logger.info('Request: %O', cacheKey);

    try {
      let data = this.cache.get(cacheKey);

      if (!data) {
        data = await Fetcher(this.path, queryParams);
        this.cache.set({ cacheKey, data });
      }

      this.responseSuccess(
        res,
        this.groupByCountry ? groupByCountry(data) : data,
      );
    } catch (error) {
      Logger.error('Catch runService %O', error);
      this.errorResponse(res, error);
    }
  }

  responseSuccess(res, data, cacheKey) {
    this.groupByCountry = false;
    Logger.info('Request END SUCCESS: %s %s', this.path, cacheKey);
    return res.status(200).json(data);
  }

  errorResponse(res, error, cacheKey) {
    this.groupByCountry = false;
    Logger.error('Request END ERROR: %s %O', this.path, cacheKey);
    return res.status(500).json(error);
  }
  processRequest(req) {
    Logger.info('1 - Process Request:', req.query);
    if (req.query['clearCache']) {
      this.cache.flushCache();
      return this.responseSuccess({ data: { result: 'CLEAR CACHE SUCCESS' } });
    }
    console.log(req.query, !!req.query['groupByCountry']);
    if (req.query['groupByCountry']) {
      Logger.error('groupByCountry');
      this.groupByCountry = true;
      delete req.query['groupByCountry'];

      console.log(req.query);
    }

    const queryParams = {};
    queryParams['params'] = req.query ? req.query : {};

    return {
      queryParams,
      cacheKey: req.url,
    };
  }
}

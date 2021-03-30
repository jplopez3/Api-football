import AbstractRouter from '../utils/AbstractRouter.js';
import CacheFactory from '../utils/cache/CacheFactory.js';
import { apiFootballInstance } from '../loaders/axios.js';
import Logger from '../loaders/winston.js';

export default class DynamicEndpoint extends AbstractRouter {
  constructor({ cacheStdTTL = null, path }) {
    super(path);
    this.path = path;
    this.cache = CacheFactory.create({ cacheName: this.path, cacheStdTTL });
  }

  runService(req, res) {
    this.res = res;
    this.requestConfig = this.processRequest(req);
    Logger.info('Get: %s %O', this.path, this.requestConfig);

    this.cache
      .isDataInCache(this.requestConfig.cacheKey)
      .then((data) => {
        this.responseSuccess(data);
      })
      .catch(() => {
        this.fetchFromApi(this.path, this.requestConfig.queryParams)
          .then((data) => {
            this.cache.saveInCache({
              cacheKey: this.requestConfig.cacheKey,
              data,
            });
            this.responseSuccess(data);
          })
          .catch((error) => {
            //Todo: should we save in cache error responses?
            Logger.error('Catch fetchFromApi %O', error);
            this.errorResponse(error);
          });
      });
  }

  responseSuccess(data) {
    this.res.status(200).json(data);
  }

  errorResponse(error) {
    console.timeEnd(this.path);
    return this.res.status(500).json(error);
  }

  processRequest(req) {
    Logger.info('processRequest', req.query);
    if (req.query['clearCache']) {
      this.cache.flushCache();
      return this.responseSuccess({ data: { result: 'CLEAR CACHE SUCCESS' } });
    }

    const queryParams = {};
    queryParams['params'] = req.query ? req.query : {};

    return {
      queryParams,
      cacheKey: req.url,
    };
  }
  async fetchFromApi(url, queryParams) {
    Logger.info('Start fetchFromApi: %s, %O', url, queryParams);
    try {
      const response = await apiFootballInstance.get(url, queryParams);
      response.data.cacheDate = new Date().getTime();
      Logger.info('fetchFromApi %s response: %O', url, response.status);
      return Promise.resolve(response.data);
    } catch (error) {
      Logger.error('fetchFromApi catch %O', error);
      return Promise.resolve(error);
    }
  }
}

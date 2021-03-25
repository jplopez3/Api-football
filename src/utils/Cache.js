import NodeCache from 'node-cache';
import { defaultCacheConfig } from '../config/index.js';
import Logger from '../loaders/winston.js';
export default class Cache {
  constructor(cacheStdTTL) {
    if (cacheStdTTL) defaultCacheConfig.stdTTL = cacheStdTTL;

    this.cache = new NodeCache(defaultCacheConfig);
  }

  async isDataInCache(cacheKey) {
    let data = this.cache.get(cacheKey);
    let isDataUndefined = data == undefined;

    Logger.info(`Is ${cacheKey} InCache? ${!isDataUndefined}`);

    if (isDataUndefined) {
      return Promise.reject(new Error('empty cache'));
    }
    return Promise.resolve(data);
  }

  saveInCache({ cacheKey, data }) {
    Logger.info('saveInCache' + cacheKey);
    this.cache.set(cacheKey, data, this.cacheStdTTL);
  }

  flushCache() {
    this.cache.flushAll();
    Logger.warn('CLEAR CACHE SUCCESS');
  }
}

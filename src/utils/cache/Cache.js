import NodeCache from 'node-cache';
import { defaultCacheConfig } from '../../config/index.js';
import Logger from '../../loaders/winston.js';
export default class Cache {
  constructor(pathToCache, cacheStdTTL) {
    if (cacheStdTTL) defaultCacheConfig.stdTTL = cacheStdTTL;
    this.cache = new NodeCache(cacheStdTTL);
    this.pathToCache = pathToCache;
    this.registerEvents();
  }

  async get(cacheKey) {
    let data = this.cache.get(cacheKey);
    Logger.info(
      `2 - Get ${cacheKey} from cache. In Cache? ${!(data == undefined)}`,
    );

    return data;
  }

  set({ cacheKey, data }) {
    Logger.info(
      '5 - Save data in cache: key: %s, TTL: %s',
      cacheKey,
      this.cacheStdTTL,
    );
    this.cache.set(cacheKey, data, this.cacheStdTTL);
  }

  flushCache() {
    this.cache.flushAll();
    Logger.warn('5 - CLEAR CACHE SUCCESS');
  }

  registerEvents() {
    this.cache.on('expired', (key, value) => {
      Logger.debug('5 - %s - %s expired', key, value);
    });
  }
}

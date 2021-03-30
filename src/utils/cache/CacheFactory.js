import Cache from './cache.js';
import Logger from '../../loaders/winston.js';
import { defaultCacheConfig } from '../../config/index.js';

class CacheFactory {
  constructor() {
    this.caches = {};
  }

  create({ cacheName, cacheStdTTL }, cacheConfig = defaultCacheConfig()) {
    if (!cacheName) throw 'Invalid cache name' + cacheName;

    if (cacheStdTTL) cacheConfig.cacheStdTTL = cacheStdTTL;

    Logger.info('CacheFactory: created cache - %s', cacheName);
    Logger.debug('Cache config: %O', cacheConfig);

    return (this.caches[cacheName] = new Cache(defaultCacheConfig));
  }

  get(cacheName) {
    if (!cacheName || this.caches[cacheName] === undefined)
      throw 'Invalid cache name';

    return this.caches[cacheName];
  }

  getAll() {
    return Object.keys(this.caches);
  }
}

export default new CacheFactory();

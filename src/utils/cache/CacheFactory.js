import Cache from './Cache.js';
import Logger from '../../loaders/winston.js';
import { defaultCacheConfig } from '../../config/index.js';

class CacheFactory {
  constructor() {
    this.caches = {};
  }

  create({ pathToCache, cacheStdTTL }) {
    if (!pathToCache) throw 'Invalid path to cache name: ' + pathToCache;
    const cacheConfig = defaultCacheConfig();
    if (cacheStdTTL) cacheConfig.cacheStdTTL = cacheStdTTL;

    Logger.info(
      'CacheFactory: created cache - %s - %s',
      pathToCache,
      cacheConfig.cacheStdTTL,
    );
    Logger.debug('Cache config: %O', cacheConfig);

    return (this.caches[pathToCache] = new Cache(pathToCache, cacheConfig));
  }

  get(pathToCache) {
    if (!pathToCache || this.caches[pathToCache] === undefined)
      throw 'Invalid cache name';

    return this.caches[pathToCache];
  }

  getAll() {
    return Object.keys(this.caches);
  }
}

export default new CacheFactory();

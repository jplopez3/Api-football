import NodeCache from 'node-cache';
import querystring from 'querystring';
import { defaultCacheConfig } from '../../config/index.js';
import Logger from '../../loaders/winston.js';

export default class Cache {
	constructor(pathToCache, cacheStdTTL) {
		this.cacheConfig = cacheStdTTL ? cacheStdTTL : defaultCacheConfig;
		this.cache = new NodeCache(cacheStdTTL);
		this.pathToCache = pathToCache;
		this.registerEvents();
	}

	async get(cacheKey) {
		let data = this.cache.get(cacheKey);
		Logger.info(
			`2 - Get ${cacheKey} from cache. In Cache? ${!(data == undefined)}`
		);

		return data;
	}

	set({ cacheKey, data, ttl = this.cacheConfig.stdTTL }) {
		Logger.info(
			'5 - Save data in cache: key: %s, TTL: %s',
			cacheKey,
			ttl
		);

		this.cache.set(cacheKey, data, ttl);
	}

	flushCache() {
		this.cache.flushAll();
		Logger.warn('5 - CLEAR CACHE SUCCESS');
	}

	getCacheKey(params) {
		const qs = querystring.stringify(params);
		return `${this.pathToCache}/${qs}`;
	}
	registerEvents() {
		this.cache.on('expired', (key, value) => {
			Logger.debug('5 - %s - %s expired', key, value);
		});
	}
}

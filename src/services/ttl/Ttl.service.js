import Logger from '../../loaders/winston.js';
import DefaultTtlStrategy from './ttlStrategy.js';
class TtlService {
	constructor() {
		Logger.debug('ttl.service.js Initializing TtlService');
		this.ttlStrategies = new Map();
	}

	registerStrategy({ pathToCache, ttlStrategy }) {
		Logger.debug('ttl.service.js -> registerStrategy() -> %s', pathToCache);
		return this.ttlStrategies.set(pathToCache, ttlStrategy);
	}

	getStrategy(name) {
		Logger.debug('ttl.service.js -> getStrategy() -> %s', name);
		const ttlStrategy = this.ttlStrategies.get(name);
		return ttlStrategy ? ttlStrategy : new DefaultTtlStrategy();
	}
}

export default new TtlService();

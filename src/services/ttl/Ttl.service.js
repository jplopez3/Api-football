import Logger from '../../loaders/winston.js';

class TtlService {
	constructor() {
		Logger.debug('ttl.service.js Initializing TtlService');
		this.ttlStrategies = new Map();
	}

	registerStrategy(name, strategy) {
		Logger.debug('ttl.service.js -> registerStrategy() -> %s', name);
		return this.ttlStrategies.set(name, strategy);
	}

	getStrategy(name) {
		Logger.debug('ttl.service.js -> getStrategy() -> %s', name);
		return this.ttlStrategies.get(name);
	}
}

export default new TtlService();

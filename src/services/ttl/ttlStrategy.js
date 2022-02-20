class TtlStrategy {
	constructor(defaultTtl = 60) {
		this.ttl = defaultTtl;
	}
	getInSeconds() {
		return this.ttl;
	}

	getDBExpireDate() {
		throw new Error('Not defined in ttlStrategy');
	}
}

export default TtlStrategy;

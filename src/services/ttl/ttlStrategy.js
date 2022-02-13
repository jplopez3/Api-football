class TtlStrategy {
	constructor() {}
	getInSeconds() {
		return 60;
	}

	getDBExpireDate() {
		throw new Error('Not defined in ttlStrategy');
	}
}

export default TtlStrategy;

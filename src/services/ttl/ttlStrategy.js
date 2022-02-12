class TtlStrategy {
	ttlStrategy() {

	}
	getInSeconds() {
        return 15;
	};

	getDBExpireDate() {
		throw new Error('Not defined in ttlStrategy');
	};

}

export default TtlStrategy;
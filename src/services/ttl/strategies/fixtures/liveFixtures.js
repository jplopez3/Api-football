import TtlStrategy from '../../ttlStrategy.js';

class LiveFixtures extends TtlStrategy {
	getInSeconds() {
		return 15;
	}
}
export default LiveFixtures;

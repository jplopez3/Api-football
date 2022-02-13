import TtlStrategy from '../../../services/ttl/ttlStrategy.js';

class LiveFixtures extends TtlStrategy {
	getInSeconds() {
		return 15;
	}
}
export default LiveFixtures;

import TtlStrategy from '../../../services/ttl/ttlStrategy.js';

class statisticsTTL extends TtlStrategy {
	getInSeconds() {
		return 10000;
	}
}
export default statisticsTTL;

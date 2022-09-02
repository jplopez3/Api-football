import ttlService from '../../Ttl.service.js';
import StandingsTtl from './standingTTL.js';

const ttlStrategy = new StandingsTtl();
const config = {
	pathToCache: '/standings',
	ttlStrategy: ttlStrategy,
};
ttlService.registerStrategy(config);

export default StandingsTtl;

import ttlService from '../../Ttl.service.js';
import StandingsTtl from './standingTTL.js';

const ttlStrategy = new StandingsTtl();
const config = {
	pathToCache: '/standings',
	ttlStrategy: ttlStrategy,
};
console.log(' ttlStrategy.constructor.name', ttlStrategy.constructor.name);
ttlService.registerStrategy(config);

export default StandingsTtl;

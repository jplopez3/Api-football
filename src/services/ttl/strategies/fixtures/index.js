import ttlService from '../../Ttl.service.js';
import Logger from '../../../../loaders/winston.js';
import FixturesByDateTTL from './fixturesByDateTTL.js';
import FixtureByIdTTL from './fixtureByIdTTL.js';
import Head2headTTL from './head2headTTL.js';
import LiveFixtures from './liveFixtures.js';



function registerTTLStrategies(ttlStrategies) {
	ttlStrategies.forEach((TtlStrategy) => {
		const ttlStrategy = new TtlStrategy();
		const config = {
			pathToCache: ttlStrategy.constructor.name,
			ttlStrategy: ttlStrategy,
		};
		ttlService.registerStrategy(config);
		Logger.warn('registerTTLStrategies %o', config);
	});
	

}


export default () => {
	//register the strategies
registerTTLStrategies([
	FixturesByDateTTL,
	FixtureByIdTTL,
	Head2headTTL,
	LiveFixtures,
]);
};
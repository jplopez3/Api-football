import ttlservice from './ttl.service.js';
import TtlStrategy from './ttlStrategy.js';


const strategyPath = 'my/path';
const ttlStrategy =  new TtlStrategy();
describe('Time to live service Tests', () => {
	let myStrategy;
	beforeEach(() => {
		ttlservice.registerStrategy(strategyPath, ttlStrategy);
	});

	test('It should set correctly the strategy', () => {
		myStrategy = ttlservice.getStrategy(strategyPath);
		expect(ttlservice.ttlStrategies.size).toBe(1);
		expect(myStrategy).toEqual(expect.any(TtlStrategy));
	});

	test('It should return a strategy', () => {
		myStrategy = ttlservice.getStrategy(strategyPath);
		expect(myStrategy).toMatchObject({
			getInSeconds: expect.any(Function),
			getDBExpireDate: expect.any(Function),
		});
	});
});

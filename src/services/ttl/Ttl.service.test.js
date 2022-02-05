import ttlservice from './ttl.service.js';

const strategyPath = 'my/path';
const ttlStrategy = (date) => {
	const myDate = new Date(date);

	const getInSeconds = (() => {
		return 1000;
	});

	const getDBExpireDate = (() => {
		return myDate;
	});

	return {
		getInSeconds,
		getDBExpireDate
	};
};
describe('Time to live service Tests', () => {
	let myStrategy;
	beforeEach(() => {
		ttlservice.registerStrategy(strategyPath, ttlStrategy);
	});

	test('It should set correctly the strategy', () => {
		myStrategy = ttlservice.getStrategy(strategyPath);
		expect(ttlservice.ttlStrategies.size).toBe(1);
		expect(myStrategy).toEqual(expect.any(Function)); 
	});

	test('It should return a strategy', () => {
		myStrategy = ttlservice.getStrategy(strategyPath);
		expect(myStrategy()).toMatchObject({
			getInSeconds: expect.any(Function),
			getDBExpireDate: expect.any(Function),
		}); 
	});
});
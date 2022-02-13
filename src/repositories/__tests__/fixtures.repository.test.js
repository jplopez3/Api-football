import { getFixturesByDate } from '../Fixtures.repository.js';

describe('Fixtures repository tests', () => {
	describe('Get fixture by date in the past', () => {
		test('get fixture by date in the cache', () => {});
	});

	test('Invalid date Throws exception', () => {
		expect(() => {
			getFixturesByDate('07-07-2020');
		}).toThrow('Invalid date');

		expect(() => {
			getFixturesByDate('07-07-2020');
		}).not.toThrow();
		//expect(getFixturesByDate).toThrow('Invalid date');
	});
});
//
//get fixture by date in the cache
//try to find in database
//GET from football api
//Save in database and cache

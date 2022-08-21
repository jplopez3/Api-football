import { jest } from '@jest/globals';
import { differenceInSeconds, subMinutes, endOfDay, add } from 'date-fns';

import FixtureByIdTTL from '../fixtureByIdTTL.js';
import fixtureFactory from '../../../../../utils/mocks/fixtures_mock.js';
import fixturesHelper from '../../../../../utils/fixturesHelper.js';

jest.mock('../../../../../utils/fixturesHelper.js', () => jest.fn());
fixturesHelper.hasCoverage = jest.fn();

const futureGame = fixtureFactory({
	date: '2000-01-02T16:00:00+00:00',
	shortStatus: 'NS',
});
const fixtureTtlService = new FixtureByIdTTL();

describe('Fixtures by id cache Time to live tests', () => {
	const todayDate = new Date('2000-01-01T18:00:00+00:00');
	jest.useFakeTimers().setSystemTime(todayDate);

	test('If hour of the game already passed and it didnt started should have 15seconds cache', async () => {
		const lateLiveGame = fixtureFactory({
			date: '2000-01-01T17:55:00+00:00',
			shortStatus: 'NS',
		});
		const ttlValue = await fixtureTtlService.getInSeconds(lateLiveGame);
		expect(ttlValue).toBe(15);
	});
	test('Live game should return 15 seconds cache', async () => {
		const liveGame = fixtureFactory({
			date: '2000-01-01T18:50:00+00:00',
			shortStatus: '1H',
		});
		const ttlValue = await fixtureTtlService.getInSeconds(liveGame);
		expect(ttlValue).toBe(15);
	});

	test('Hour of the game already passed and match finished should have 2 days cache', async () => {
		const fixtureDate = new Date('2000-01-01T16:00:00+00:00');
		const finishedGame = fixtureFactory({
			date: fixtureDate,
			shortStatus: 'FT',
		});
		const expectedDate = add(todayDate, {
			days: 2,
		});
		const expectedTtl = differenceInSeconds(expectedDate, todayDate);
		const ttlValue = await fixtureTtlService.getInSeconds(finishedGame);
		expect(ttlValue).toBe(expectedTtl);
	});

	describe('Fixtures with no coverage', () => {
		let todayGame;
		beforeAll(() => {
			todayGame = fixtureFactory({
				date: '2000-01-01T20:00:00+00:00',
				shortStatus: 'NS',
			});

			fixturesHelper.hasCoverage.mockResolvedValue(false);
		});

		test('Today games have cache until the begining of the game', async () => {
			const fixtureDate = new Date('2000-01-01T20:00:00+00:00');
			const expectedTtl = differenceInSeconds(fixtureDate, todayDate);

			const ttlValue = await fixtureTtlService.getInSeconds(todayGame);
			expect(ttlValue).toBe(expectedTtl);
		});

		test('Games that are not today have cache until the end of the day', async () => {
			const ttlValue = await fixtureTtlService.getInSeconds(futureGame);
			const endofDay = endOfDay(new Date(todayDate));

			const expectedTtl = differenceInSeconds(endofDay, todayDate);
			expect(ttlValue).toBe(expectedTtl);
		});
	});

	describe('Fixtures with coverage', () => {
		beforeAll(() => {
			fixturesHelper.hasCoverage.mockResolvedValue(true);
		});

		test('Fixtures with lineups have cache until the begining of the game', async () => {
			const fixtureDate = new Date('2000-01-02T16:00:00+00:00');
			const expectedTtl = differenceInSeconds(
				fixtureDate,
				new Date(todayDate)
			);

			const ttlValue = await fixtureTtlService.getInSeconds(futureGame);
			expect(ttlValue).toBe(expectedTtl);
		});

		test('If we dont have lineups and fixture starts less than 30min should have 15seconds ttl', async () => {
			const fixtureDate = new Date('2000-01-01T18:25:00+00:00');
			const fixture = fixtureFactory({
				date: fixtureDate,
				shortStatus: 'NS',
			});
			fixture.data.response[0].lineups.length = 0;

			const ttlValue = await fixtureTtlService.getInSeconds(fixture);
			expect(ttlValue).toBe(15);
		});

		test('If we dont have lineups and fixture starts More than 30min cache should 30min before the fixture start', async () => {
			const fixtureDate = new Date('2000-01-01T19:00:00+00:00');
			const expectedFixtureDate = subMinutes(fixtureDate, 30);

			const fixture = fixtureFactory({
				date: fixtureDate,
				shortStatus: 'NS',
			});
			fixture.data.response[0].lineups.length = 0;

			const expectedTtl = differenceInSeconds(
				expectedFixtureDate,
				new Date(todayDate)
			);

			const ttlValue = await fixtureTtlService.getInSeconds(fixture);
			expect(ttlValue).toBe(expectedTtl);
		});

		test('If we dont have lineups and fixture dont start today should have cache until end of the day', async () => {
			const fixtureDate = new Date('2000-01-02T19:00:00+00:00');
			const fixture = fixtureFactory({
				date: fixtureDate,
				shortStatus: 'NS',
			});
			fixture.data.response[0].lineups.length = 0;

			const endofDay = endOfDay(new Date(todayDate));
			const expectedTtl = differenceInSeconds(
				endofDay,
				new Date(todayDate)
			);

			const ttlValue = await fixtureTtlService.getInSeconds(fixture);
			expect(ttlValue).toBe(expectedTtl);
		});
	});
});

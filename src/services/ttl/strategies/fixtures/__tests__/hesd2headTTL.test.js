import { jest } from '@jest/globals';
import { differenceInSeconds, add } from 'date-fns';
import head2headTTL from '../head2headTTL.js';
import fixtureFactory from '../../../../../utils/mocks/fixtures_mock.js';

const head2headTTLservice = new head2headTTL();

describe('Head to head cache ttl tests', () => {
	const todayDate = new Date('2000-01-10T18:00:00+00:00');
	jest.useFakeTimers().setSystemTime(new Date(todayDate));

	describe('Today games', () => {
		test('Game didnt start has cache until end of game', async () => {
			const todayGame = fixtureFactory({
				date: '2000-01-10T19:00:00+00:00',
				shortStatus: 'NS',
			});
			const ttlValue = await head2headTTLservice.getInSeconds(todayGame);
			expect(ttlValue).toBe(0);
		});
		test('Live game has cache until end of game', async () => {
			const liveGame = fixtureFactory({
				date: '2000-01-10T18:00:00+00:00',
				shortStatus: '1H',
			});
			const ttlValue = await head2headTTLservice.getInSeconds(liveGame);
			expect(ttlValue).toBe(0);
		});
		test('Game has finished has cache for 2 days', async () => {
			const fixtureDate = new Date('2000-01-01T17:00:00+00:00');
			const finishedGame = fixtureFactory({
				date: fixtureDate,
				shortStatus: 'FT',
			});
			const expectedDate = add(fixtureDate, {
				days: 2,
			});
			const expectedDateInSeconds = differenceInSeconds(
				expectedDate,
				fixtureDate
			);
			const ttlValue = await head2headTTLservice.getInSeconds(
				finishedGame
			);
			expect(ttlValue).toBe(expectedDateInSeconds);
		});
	});

	describe('Games that are not today', () => {
		test('Game in the future and its not today, have 1 day cache', async () => {
			const fixtureDate = new Date('2000-01-12T17:00:00+00:00');
			const futureGame = fixtureFactory({
				date: fixtureDate,
				shortStatus: 'NS',
			});
			const expectedDate = add(fixtureDate, {
				days: 1,
			});
			const expectedDateInSeconds = differenceInSeconds(
				expectedDate,
				fixtureDate
			);
			const ttlValue = await head2headTTLservice.getInSeconds(futureGame);
			expect(ttlValue).toBe(expectedDateInSeconds);
		});
		test('Game in the Past have 2 days cache', async () => {
			const fixtureDate = new Date('2000-01-05T17:00:00+00:00');
			const pastGame = fixtureFactory({
				date: fixtureDate,
				shortStatus: 'FT',
			});
			const expectedDate = add(todayDate, {
				days: 2,
			});
			const expectedDateInSeconds = differenceInSeconds(
				expectedDate,
				todayDate
			);
			console.log('expectedDate', expectedDate, fixtureDate);
			const ttlValue = await head2headTTLservice.getInSeconds(pastGame);
			expect(ttlValue).toBe(expectedDateInSeconds);
		});
	});
});

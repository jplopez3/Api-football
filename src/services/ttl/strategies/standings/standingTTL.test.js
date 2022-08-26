import { jest } from '@jest/globals';
import { addHours, differenceInSeconds, setMinutes } from 'date-fns';

import StandingTTL from './standingTTL';

const standingsTtlService = new StandingTTL();

describe('Fixtures by id cache time to live tests', () => {
	const todayDate = new Date('2000-01-01T18:20:00+00:00');
	jest.useFakeTimers().setSystemTime(todayDate);

	test('Should set the cache to next hour and + 5 minutes according to the server time', async () => {
		const oneHourMore = addHours(todayDate, 1);
		const expectedTime = setMinutes(oneHourMore, 5);
		const expectedTtl = differenceInSeconds(expectedTime, todayDate);

		const ttlValue = await standingsTtlService.getInSeconds();
		expect(ttlValue).toBe(expectedTtl);
	});
});

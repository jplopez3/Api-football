import FootballApiService from './footballApi.service.js';
import { jest } from '@jest/globals';
import CacheRepository from '../../repositories/Cache.repository.js';
import ttlService from '../ttl/Ttl.service.js';
import TtlStrategy from '../ttl/ttlStrategy.js';

const cachePath = '/fixtures';
const queryParams = { id: 123 };
const emptyCache = null;
const cachedData = 'Data from cache';
const mockApiResponse = 'Response from API';

const cache = new CacheRepository(cachePath);
const ttlStrategy = new TtlStrategy();
ttlService.registerStrategy(cachePath, ttlStrategy);
let cacheGetSpy = jest.spyOn(cache, 'get');
let cacheSetSpy = jest.spyOn(cache, 'set');
let fetcherSpy = jest.fn();
const footballApiService = new FootballApiService(
	fetcherSpy,
	cache,
	ttlService
);

describe('FootballApiService tests', () => {
	beforeEach(() => {
		// Clear all instances and calls to constructor and all methods:
		cacheGetSpy.mockClear();
		fetcherSpy.mockClear();
	});
	describe('when footballApiService does not have cache', () => {
		let result;
		beforeEach(async () => {
			fetcherSpy.mockImplementation(() => mockApiResponse);
			cacheGetSpy.mockImplementation(() => emptyCache);

			return (result = await footballApiService.get(
				queryParams,
				cachePath
			));
		});
		test('should get data from API', async () => {
			expect(cacheGetSpy).toHaveBeenCalledWith(queryParams);
			expect(cacheGetSpy).toHaveBeenCalledTimes(1);

			expect(fetcherSpy).toHaveBeenCalledWith(cachePath, queryParams);
			expect(fetcherSpy).toHaveBeenCalledTimes(1);

			expect(result).toBe(mockApiResponse);
		});
		test('should save the data from API in cache', async () => {
			expect(cacheSetSpy).toHaveBeenCalledWith({
				params: queryParams,
				data: mockApiResponse,
				ttl: ttlStrategy.getInSeconds(),
			});
			expect(cacheSetSpy).toHaveBeenCalledTimes(1);
			expect(fetcherSpy).toHaveBeenCalledTimes(1);
		});
	});

	describe('when footballApiService does HAVE cache', () => {
		let result;
		beforeEach(async () => {
			// Clear all instances and calls to constructor and all methods:
			cacheGetSpy.mockImplementation(() => cachedData);
			return (result = await footballApiService.get(queryParams));
		});

		test('should get NOT GET data from API', () => {
			expect(cacheGetSpy).toHaveBeenCalledWith(queryParams);
			expect(cacheGetSpy).toHaveBeenCalledTimes(1);

			expect(fetcherSpy).toHaveBeenCalledTimes(0);

			expect(result).toBe(cachedData);
		});
	});
});

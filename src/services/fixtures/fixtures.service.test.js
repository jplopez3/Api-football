import { jest } from '@jest/globals';
import fapi from '../fapi/footballApi.service.js';
import CacheRepository from '../../repositories/Cache.repository.js';
import mongodb from '../../repositories/Mongo.repository.js';
import ttlService from '../ttl/Ttl.service.js';
import TtlStrategy from '../ttl/ttlStrategy.js';
import FixturesService from './Fixtures.service.js';

const cachePath = '/fixtures';
let mongodbUpdateSpy = jest.spyOn(mongodb, 'updateOne');
const cache = new CacheRepository(cachePath);
const fixturesService = new FixturesService({ fapi, ttlService, cache, mongodb });
const queryParams = { id: 677109 };

	describe('Fixtures service tests', () => {
		
        
		describe('Should have default behavior', () => {
			const result = fixturesService.get(queryParams);
			test('should verify if has data in cache', () => {

			}); 
			test('should verify if has data in database', () => {

			}); 
			test('should get from fapi', () => {

			});
			test('should save in cache', () => {

			});
		});
		describe('FixturesById tests', () => {
			test('should save in database if fixtures date is in the past for 1 week', () => {
				expect(mongodbUpdateSpy).toHaveBeenCalledWith(filter, data, expiration);
				expect(mongodbUpdateSpy).toHaveBeenCalledTimes(1);
			});
			test('if date in the future should save in db until the end of the day', () => {

			});
		});
		describe('FixturesByDate tests', () => {
			test('if date in the past should save in db until the end of the day', () => {

			});
		});

	});
});
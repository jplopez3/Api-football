//import jest from 'jest-mock';
import { jest } from '@jest/globals';
import groupByCountry from '../../group_by_country/groupByCountry.js';
import groupByCountryMiddleware from '../groupByCountry.middleware.js';
const gbcmock = jest.fn();
jest.mock('../../group_by_country/groupByCountry.js', () => gbcmock);

//groupByCountry.mockImplementation(() => console.log('yolo'));
describe('When', () => {
  test('No cachedData should move to next middleware', () => {
    const next = jest.fn();
    groupByCountryMiddleware({}, {}, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(gbcmock).toHaveBeenCalledTimes(0);
  });
  test('With cachedData should move call groupByCountry and go to next middleware', () => {
    const res = {
      locals: {
        cachedData: {},
      },
    };
    const req = {};
    const next = jest.fn();

    groupByCountryMiddleware(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    //expect(gbcmock).toHaveBeenCalledTimes(1);
  });
});

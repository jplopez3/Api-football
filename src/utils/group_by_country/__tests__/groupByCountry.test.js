import request from 'supertest';
import app from '../../../loaders/app.js';
import { groupByCountry } from '../groupByCountry.js';
import { expectedResponse } from '../mocks/expectedResponse.js';
import {
  singleFixtureResponse,
} from '../mocks/fixturesResponse.js';

describe('groupByCountry Tests', () => {
  const result = groupByCountry(singleFixtureResponse);

  test('groupByCountry result should return 3 Objects with correct countries', () => {
    expect(Object.keys(result).length).toBe(3);
    expect(result['Spain']).toBeDefined();
    expect(result['Sweden']).toBeDefined();
    expect(result['Japan']).toBeDefined();
  });

  test('groupByCountry result should return the correct total games', () => {
    expect(result['Spain'].totalGames).toBe(2);
    expect(result['Sweden'].totalGames).toBe(1);
    expect(result['Japan'].totalGames).toBe(3);
  });

  test('groupByCountry result should return the correct total live games', () => {
    expect(result['Spain'].totalLiveGames).toBe(0);
    expect(result['Sweden'].totalLiveGames).toBe(1);
    expect(result['Japan'].totalLiveGames).toBe(3);
  });

  describe('Test Each Country league object', () => {
    const spainLeagues = result['Spain'].league;
    const swedenLeagues = result['Sweden'].league;
    const japanLeagues = result['Japan'].league;

    test('It should have the correct amount of leagues', () => {
      expect(Object.keys(spainLeagues).length).toBe(1);
      expect(Object.keys(swedenLeagues).length).toBe(1);
      expect(Object.keys(japanLeagues).length).toBe(2);
    });
    test('It should have the correct league names', () => {
      expect(Object.keys(spainLeagues)[0]).toEqual('Primera Division Women');
      expect(Object.keys(swedenLeagues)[0]).toEqual('Elitettan');
      expect(Object.keys(japanLeagues)[0]).toEqual('J. League Div.1');
      expect(Object.keys(japanLeagues)[1]).toEqual('J. League Div.2');
    });

    test('Each league should have the correct list of matches', () => {
      expect(Array.isArray([spainLeagues['Primera Division Women']])).toBe(
        true,
      );
      expect(spainLeagues['Primera Division Women'].length).toBe(2);

      expect(Array.isArray([swedenLeagues['Elitettan']])).toBe(true);
      expect(swedenLeagues['Elitettan'].length).toBe(1);

      expect(Array.isArray([japanLeagues['J. League Div.1']])).toBe(true);
      expect(japanLeagues['J. League Div.1'].length).toBe(1);

      expect(Array.isArray([japanLeagues['J. League Div.2']])).toBe(true);
      expect(japanLeagues['J. League Div.2'].length).toBe(2);
    });
  });
});

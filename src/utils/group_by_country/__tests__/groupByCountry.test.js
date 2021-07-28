import groupByCountry from '../groupByCountry.js';
import { expectedResponse } from '../mocks/expectedResponse.js';
import { singleFixtureResponse } from '../mocks/fixturesResponse.js';

const expectedCountries = Object.keys(expectedResponse);

describe('groupByCountry Tests', () => {
  const result = groupByCountry(singleFixtureResponse.response);
  test('groupByCountry result should return the correct number of countries', () => {
    expect(Object.keys(result).length).toBe(expectedCountries.length);
    expectedCountries.forEach((country) =>
      expect(result[country]).toBeDefined(),
    );
  });

  test('groupByCountry result should return the correct total games in each country', () => {
    expectedCountries.forEach((country) =>
      expect(result[country].totalGames).toBe(
        expectedResponse[country].totalGames,
      ),
    );
  });

  test('groupByCountry result should return the correct total live games', () => {
    expectedCountries.forEach((country) =>
      expect(result[country].totalLiveGames).toBe(
        expectedResponse[country].totalLiveGames,
      ),
    );
  });

  describe('Test Each Country league object', () => {
    expectedCountries.forEach((country) => {
      validateExpected(
        result[country].league,
        expectedResponse[country].league,
      );
    });
  });
});

function validateExpected(resultLeagues, expectedLeagues) {
  const resultLeaguesArr = Object.keys(resultLeagues);
  const expectedLeaguesArr = Object.keys(expectedLeagues);

  test('It should have the correct amount of leagues', () => {
    expect(resultLeagues.length).toBe(expectedLeagues.length);
  });

  test('It should have the correct league names sorted by league.id', () => {
    resultLeaguesArr.forEach((leagueName, index) => {
      expect(leagueName).toEqual(expectedLeaguesArr[index]);
    });
  });

  test('Each league should have an array with correct number of matches', () => {
    resultLeaguesArr.forEach((leagueName, index) => {
      expect(Array.isArray(resultLeagues[leagueName])).toBe(true);
      expect(resultLeagues[leagueName].length).toBe(
        expectedLeagues[leagueName].length,
      );
    });
  });
}

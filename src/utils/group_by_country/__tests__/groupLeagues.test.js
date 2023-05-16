import leagues_mock from '../../mocks/leagues_mock';
import groupLeagues from '../groupLeagues';

const expectedResponse = [
	{
		Belgium: {
			image: '',
			leagues: [
				{
					id: 149,
				},
			],
		},
	},
	{
		Spain: {
			image: '',
			leagues: [
				{
					id: 150,
				},
			],
		},
	},
	{
		Portugal: {
			image: '',
			leagues: [
				{
					id: 94,
				},
				{
					id: 95,
				},
			],
		},
	},
];

describe('groupLeagues tests', () => {
	test('groupLeagues throws an exception when parameters is not an Array', () => {
		expect(() => {
			groupLeagues({});
		}).toThrow(Error);
	});
	test('groupLeagues should return an array', () => {
		const result = groupLeagues(leagues_mock);
		expect(Array.isArray(result)).toBe(true);
	});
	test('groupLeagues should return an Array with country', () => {
		const result = groupLeagues(leagues_mock);
		expect(Array.isArray(result)).toBe(true);
	});
	test('groupLeagues should return an Array with 3 countries objects', () => {
		const result = groupLeagues(leagues_mock);
		expect(result.length).toBe(expectedResponse.length);
		expect(typeof result[0]).toBe('object');
		expect(typeof result[1]).toBe('object');
		expect(typeof result[2]).toBe('object');
	});
	test('expectedResponse should contain specific countries', () => {
		const result = groupLeagues(leagues_mock);

		expectedResponse.forEach((league, index) => {
			const exptectedCountryName = Object.keys(league).pop();
			const resultCountryName = Object.keys(result[index]).pop();
			expect(resultCountryName).toBe(exptectedCountryName);
		});
	});
	test('expectedResponse Countries should contain a leagues Array', () => {
		const result = groupLeagues(leagues_mock);

		result.forEach((league, index) => {
			const resultLeague = league[Object.keys(league)[0]];
			const expectedLeague =
				expectedResponse[index][Object.keys(league)[0]];
			expect(Array.isArray(resultLeague.leagues)).toBe(true);
			expect(resultLeague.leagues.length).toBe(
				expectedLeague.leagues.length
			);
		});
	});
});

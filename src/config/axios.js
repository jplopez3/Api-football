import { API_FOOTBALL_KEY } from './constants.js';

const rapidApiFootballAxios = {
	baseURL: 'https://api-football-v1.p.rapidapi.com/v3/',
	headers: {
		'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
		'x-rapidapi-key': API_FOOTBALL_KEY,
		useQueryString: true,
	},
};
export { rapidApiFootballAxios };

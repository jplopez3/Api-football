const apiFootballAxios = {
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'v3.api-football.com',
    'X-RapidAPI-Key': process.env.API_FOOTBALL_KEY,
    useQueryString: true,
  },
};

const rapidApiFootballAxios = {
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3/',
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key':  process.env.API_FOOTBALL_KEY,
    useQueryString: true,
  },
};
export { apiFootballAxios, rapidApiFootballAxios };

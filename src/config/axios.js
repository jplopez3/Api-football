const apiFootballAxios = {
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'v3.api-football.com',
    'X-RapidAPI-Key': process.env.API_FOOTBALL_KEY,
    useQueryString: true,
  },
};
export { apiFootballAxios };

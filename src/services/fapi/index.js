import FootballApiService from './footballApi.service.js';

const leagues = new FootballApiService('/leagues');

export {leagues};
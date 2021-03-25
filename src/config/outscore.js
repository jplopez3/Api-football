const apiPath = '/api/v3';

const apiFootballEndPoint = {
  path: '/fixtures',
  cacheStdTTL: '3600',
};
const apiFootballStatisticsEndPoint = {
  path: '/fixtures/statistics',
  cacheStdTTL: '3600',
};
const apiFootballStandingsEndPoint = {
  path: '/standings',
  cacheStdTTL: '3600',
};
const apiFootballHeadToHeadEndPoint = {
  path: '/fixtures/headtohead',
  cacheStdTTL: '3600',
};

const endPoints = [
  apiFootballEndPoint,
  apiFootballStatisticsEndPoint,
  apiFootballStandingsEndPoint,
  apiFootballHeadToHeadEndPoint,
];

export { endPoints, apiPath };

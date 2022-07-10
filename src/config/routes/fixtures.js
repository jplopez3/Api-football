const basePath = '/fixtures';
const fixturesCacheConfig = {
	route: '/',
	pathToCache: basePath,
};
const statisticsCacheConfig = {
	route: '/statistics',
	pathToCache: `${basePath}/statistics`,
};
const headToHeadCacheConfig = {
	route: '/headtohead',
	pathToCache: `${basePath}/headtohead`,
};
export { fixturesCacheConfig, statisticsCacheConfig, headToHeadCacheConfig };

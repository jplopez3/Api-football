import  { FixturesByDateTTL, Head2headTTL } from '../../resources/fixtures/ttl/index.js';


const basePath = '/fixtures';
const fixturesCacheConfig = {
	route: '/',
	pathToCache: basePath,
};
const statisticsCacheConfig = {
	route: '/statistics',
	pathToCache: `${basePath}/statistics`,
	ttlStrategy: new FixturesByDateTTL(),
};
const headToHeadCacheConfig = {
	route: '/headtohead',
	pathToCache: `${basePath}/headtohead`,
	ttlStrategy: new Head2headTTL(),
};
export default [
	fixturesCacheConfig,
	statisticsCacheConfig,
	headToHeadCacheConfig,
];

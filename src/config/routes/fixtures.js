import fixtureByIdTTL from '../../resources/fixtures/ttl/fixtureByIdTTL.js';
import Head2headTTL from '../../resources/fixtures/ttl/head2headTTL.js';
import LiveFixturesTTL from '../../resources/fixtures/ttl/liveFixtures.js';

const basePath = '/fixtures';
const fixturesCacheConfig = {
	route: '/',
	pathToCache: basePath,
	ttlStrategy: new fixtureByIdTTL(),
};
const statisticsCacheConfig = {
	route: '/statistics',
	pathToCache: `${basePath}/statistics`,
	ttlStrategy: new LiveFixturesTTL(),
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

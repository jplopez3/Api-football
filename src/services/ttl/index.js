import TtlService from './Ttl.service.js';
import initFixturesTtl from './strategies/fixtures/index.js';
import standings from './strategies/standings/index.js';

const initTtlService = () => {
	initFixturesTtl();
};

export { initTtlService, TtlService };

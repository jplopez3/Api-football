
import TtlService from './Ttl.service.js'
import initFixturesTtl from './strategies/fixtures/index.js';

const initTtlService = () => {
    initFixturesTtl();
}

export { initTtlService, TtlService };
import fixturesService from '../../services/fixtures/Fixtures.service.js';
import footballApi from '../../services/fapi/footballApi.service.js';
import { headToHeadCacheConfig } from '../../config/routes/fixtures.js';
import Logger from '../../loaders/winston.js';

const fapi = new footballApi(headToHeadCacheConfig.pathToCache);
const LAST = 5;

export default (() => {
	const get = async ({ home, away }) => {
		Logger.info('BetsHelper.Service.js -> Home: %s - Away: %s', home, away);

		let { homeFixtures, awayFixtures, h2hFixtures } = await asyncCall([
			fixturesService.get(getFixturesByTeamParams(home)),
			fixturesService.get(getFixturesByTeamParams(away)),
			fapi.get(getH2HParams({ home, away })),
		]);

		const homeFixturesIds = getIdFromFixtures(homeFixtures);
		const awayFixturesIds = getIdFromFixtures(awayFixtures);
		const h2hFixturesIds = getIdFromFixtures(h2hFixtures);

		return ({ homeFixtures, awayFixtures, h2hFixtures } = await asyncCall([
			getFixturesByIdList(homeFixturesIds),
			getFixturesByIdList(awayFixturesIds),
			getFixturesByIdList(h2hFixturesIds),
		]));
	};

	const isInCache = ({ home, away }) => {
		let isCached =
			fixturesService.hasCache(getFixturesByTeamParams(home)) &&
			fixturesService.hasCache(getFixturesByTeamParams(away)) &&
			fapi.hasCache(getH2HParams({ home, away }));

		if (isCached) {
			const homeFixturesIds = getIdFromFixtures(
				fixturesService.getFromCache(getFixturesByTeamParams(home))
			);
			const awayFixturesIds = getIdFromFixtures(
				fixturesService.getFromCache(getFixturesByTeamParams(away))
			);
			const h2hFixturesIds = getIdFromFixtures(
				fapi.getFromCache(getH2HParams({ home, away }))
			);

			isCached =
				homeFixturesIds.every((id) =>
					fixturesService.hasCache(getFixturesParams(id))
				) &&
				awayFixturesIds.every((id) =>
					fixturesService.hasCache(getFixturesParams(id))
				) &&
				h2hFixturesIds.every((id) =>
					fixturesService.hasCache(getFixturesParams(id))
				);
		}

		return isCached;
	};

	return {
		get,
		isInCache,
	};
})();

const getFixturesByTeamParams = (teamId) => {
	return {
		last: LAST,
		team: teamId,
		status: 'FT',
	};
};

const getFixturesParams = (fixtureId) => {
	return {
		id: fixtureId,
	};
};

const getH2HParams = ({ home, away }) => {
	return {
		h2h: `${home}-${away}`,
		last: LAST,
		status: 'FT',
	};
};

const asyncCall = async (asyncCallIterable) => {
	return await Promise.all(asyncCallIterable)
		.catch((err) => {
			Logger.error(
				'betshelper.controller.js -> asyncCall() catch: %O',
				err
			);
			throw err;
		})
		.then(([homeFixtures, awayFixtures, h2hFixtures]) => ({
			homeFixtures,
			awayFixtures,
			h2hFixtures,
		}));
};
const getIdFromFixtures = (fixturesResponse) => {
	return fixturesResponse?.response.reduce((fixturesIDList, match) => {
		fixturesIDList.push(match.fixture.id);
		return fixturesIDList;
	}, []);
};
const getFixturesByIdList = (fixturesIdList) => {
	const promises = fixturesIdList.map((id) =>
		fixturesService.get(getFixturesParams(id))
	);

	return Promise.all(promises).then((results) =>
		results.map(({ response }) => response.pop())
	);
};

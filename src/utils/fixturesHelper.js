import { leagues } from '../services/fapi/index.js';

const fixturesHelper = () => {
	const getTeamIds = (response) => {
		if (!Array.isArray(response)) {
			throw new Error('Invalid response');
		}
		const away = response[0].teams.away.id;
		const home = response[0].teams.home.id;
		return { away, home };
	};
	const hasCoverage = async (leagueId) => {
		const params = {
			id: leagueId,
		};
		const { response } = await leagues.get(params);
		const { seasons } = response.pop();
		let season = seasons[0];
		if (!season.current) {
			season = seasons.find((seas) => seas.current) || null;
		}

		return season?.coverage?.fixtures?.lineups;
	};

	const getLeagueId = ({ league }) => {
		return league.id;
	};

	const isLiveGame = (fixture) => {
		const liveStatus = ['1H', 'HT', '2H', 'ET', 'P', 'BT'];
		return liveStatus.includes(fixture.status.short);
	};

	const getNextLiveGame = (fixturesList) => {
		console.log(fixturesList);
	};

	return {
		getTeamIds,
		getLeagueId,
		hasCoverage,
		isLiveGame,
		getNextLiveGame,
	};
};

export default fixturesHelper();

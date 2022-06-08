const fixturesHelper = () => {
	const getTeamIds = (response) => {
		if (!Array.isArray(response)) {
			throw new Error('Invalid response');
		}
		const away = response[0].teams.away.id;
		const home = response[0].teams.home.id;
		return { away, home };
	};
	return {
		getTeamIds,
	};
};

export default fixturesHelper();

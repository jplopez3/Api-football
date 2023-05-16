export default ({ response }) => {
	if (!Array.isArray(response)) {
		throw new Error('Invalid Response - expected an array');
	}

	const leaguesResponse = response.reduce((acc, league) => {
		const {
			country: { name, flag },
			league: responseLeague,
		} = league;

		const leagueObject = {
			image: flag || '',
			leagues: [],
		};

		const myObj = getOrCreateNestedObject(acc, name, leagueObject);

		myObj.leagues.push(responseLeague);
		return acc;
	}, {});

	return Object.entries(leaguesResponse).map(([key, value]) => ({
		[key]: value,
	}));
};

const getOrCreateNestedObject = (obj, propertyName, codeToInject) => {
	if (!obj.hasOwnProperty(propertyName)) {
		obj[propertyName] = codeToInject ? { ...codeToInject } : {};
	}
	return obj[propertyName];
};

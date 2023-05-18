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

	return sort(
		Object.entries(leaguesResponse).map(([key, value]) => ({
			[key]: value,
		}))
	);
};

const getOrCreateNestedObject = (obj, propertyName, codeToInject) => {
	if (!obj.hasOwnProperty(propertyName)) {
		obj[propertyName] = codeToInject ? { ...codeToInject } : {};
	}
	return obj[propertyName];
};

const sort = (arrToSort) => {
	return arrToSort.sort((a, b) => {
		const keyA = Object.keys(a)[0]; // Get the first property key of object a
		const keyB = Object.keys(b)[0]; // Get the first property key of object b

		return sortAsc(keyA, keyB);
	});
};

function sortAsc(str1, str2) {
	// Compare the keys alphabetically
	if (str1 < str2) {
		return -1;
	}
	if (str1 > str2) {
		return 1;
	}
	return 0;
}

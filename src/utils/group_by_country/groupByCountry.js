import { isLiveGame } from '../utilFunctions.js';

export default ({ response }) => {
	const newResponse = {};
	const matches = new Map();

	response.forEach((match) => {
		const { league, fixture } = match;
		const leagueObj = {
			league: [],
			country: null,
			image: '',
			totalGames: 0,
			totalLiveGames: 0,
		};

		const countryLeague = objWrapper(
			newResponse,
			league.country,
			leagueObj
		);
		const leagueList = objWrapper(countryLeague.league, league.name);
		leagueList.push(match);
		updateCountryLeagueInfo({ countryLeague, league, fixture });
		matches.set(league, leagueList);
	});

	return (response = sort(newResponse));
};

const objWrapper = (obj, propertyName, codeToInject) => {
	if (!obj.hasOwnProperty(propertyName)) {
		obj[propertyName] = codeToInject ? codeToInject : [];
	}
	return obj[propertyName];
};

const updateCountryLeagueInfo = ({ countryLeague, league, fixture }) => {
	countryLeague.totalGames++;

	if (isLiveGame(fixture)) {
		countryLeague.totalLiveGames++;
	}

	if (!countryLeague.image || !countryLeague.country) {
		countryLeague.image = league.flag;
		countryLeague.country = league.country;
	}
};

//Todo: can clean code
const sort = (objToSort) => {
	return Object.keys(objToSort)
		.sort()
		.reduce((obj, key) => {
			obj[key] = objToSort[key];

			const leagueList = objToSort[key].league;
			const leagues = Object.keys(leagueList);

			const sortedLeagues = leagues
				.sort((league, league2) => {
					const league1Id = leagueList[league][0].league.id;
					const league2Id = leagueList[league2][0].league.id;

					if (league1Id < league2Id) return -1;
					else return 1;
				})
				.reduce((obj, key) => {
					obj[key] = leagueList[key];
					return obj;
				}, {});

			objToSort[key].league = sortedLeagues;
			return obj;
		}, {});
};

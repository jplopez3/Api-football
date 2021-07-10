const groupByCountry = (fixtures) => {
      if (!fixtures && !fixtures.response) {
        throw new Error('Invalid fixtures');
      }
  
    const newResponse = {};
    const matches = new Map();
  
    fixtures.response.map((match) => {
      const { league, fixture } = match;
      const leagueObj = {
        league: {},
        image: '',
        totalGames: 0,
        totalLiveGames: 0,
      };
  
      const countryLeague = objWrapper(newResponse, league.country, leagueObj);
      updateCountryLeagueInfo({ countryLeague, league, fixture });
      const leagueList = objWrapper(countryLeague.league, league.name);
      leagueList.push(match);
      matches.set(league, leagueList);
    });
  
    //console.log(newResponse);
    return (fixtures.response = newResponse);
  };
  
  const objWrapper = (obj, propertyName, codeToInject) => {
    if (!obj.hasOwnProperty(propertyName)) {
      obj[propertyName] = codeToInject ? codeToInject : [];
    }
    return obj[propertyName];
  };
  
  const updateCountryLeagueInfo = ({ countryLeague, league, fixture }) => {
    countryLeague.totalGames++;
    const liveStatus = ['1H', '2H', 'HT'];
    if (liveStatus.includes(fixture.status.short)) {
      countryLeague.totalLiveGames++;
    }
  
    if (!countryLeague.image) {
      countryLeague.image = league.flag;
    }
  };
  
  export { groupByCountry };
  
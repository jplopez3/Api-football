export const singleFixtureResponse = {
  get: 'fixtures',
  parameters: {
    live: 'all',
  },
  errors: [],
  results: 15,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      fixture: {
        id: 629572,
        referee: null,
        timezone: 'UTC',
        date: '2021-06-20T09:30:00+00:00',
        timestamp: 1624181400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: 3994,
          name: 'Estadio Nuevo Municipal Las Gaunas',
          city: 'Logroño',
        },
        status: {
          long: 'Match Postponed',
          short: 'PST',
          elapsed: null,
        },
      },
      league: {
        id: 142,
        name: 'Primera Division Women',
        country: 'Spain',
        logo: 'https://media.api-sports.io/football/leagues/142.png',
        flag: 'https://media.api-sports.io/flags/es.svg',
        season: 2020,
        round: 'Regular Season - 33',
      },
      teams: {
        home: {
          id: 1923,
          name: 'Edf Logrono W',
          logo: 'https://media.api-sports.io/football/teams/1923.png',
          winner: false,
        },
        away: {
          id: 1910,
          name: 'Atletico Madrid W',
          logo: 'https://media.api-sports.io/football/teams/1910.png',
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 2,
      },
      score: {
        halftime: {
          home: 0,
          away: 2,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 10,
            extra: null,
          },
          team: {
            id: 1910,
            name: 'Atletico Madrid W',
            logo: 'https://media.api-sports.io/football/teams/1910.png',
          },
          player: {
            id: null,
            name: 'D. Castellanos',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Normal Goal',
          comments: null,
        },
        {
          time: {
            elapsed: 20,
            extra: null,
          },
          team: {
            id: 1923,
            name: 'Edf Logrono W',
            logo: 'https://media.api-sports.io/football/teams/1923.png',
          },
          player: {
            id: null,
            name: 'A. Velazquez Jurico',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Card',
          detail: 'Yellow Card',
          comments: null,
        },
        {
          time: {
            elapsed: 21,
            extra: null,
          },
          team: {
            id: 1910,
            name: 'Atletico Madrid W',
            logo: 'https://media.api-sports.io/football/teams/1910.png',
          },
          player: {
            id: 144863,
            name: 'L. Santos',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Penalty',
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 629574,
        referee: null,
        timezone: 'UTC',
        date: '2021-06-20T10:00:00+00:00',
        timestamp: 1624183200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Ciudad Deportiva del Viejo Vivero',
          city: 'Badajoz',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 10,
        },
      },
      league: {
        id: 142,
        name: 'Primera Division Women',
        country: 'Spain',
        logo: 'https://media.api-sports.io/football/leagues/142.png',
        flag: 'https://media.api-sports.io/flags/es.svg',
        season: 2020,
        round: 'Regular Season - 33',
      },
      teams: {
        home: {
          id: 15223,
          name: 'Santa Teresa',
          logo: 'https://media.api-sports.io/football/teams/15223.png',
          winner: false,
        },
        away: {
          id: 15224,
          name: 'Real Madrid W',
          logo: 'https://media.api-sports.io/football/teams/15224.png',
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 2,
      },
      score: {
        halftime: {
          home: 0,
          away: 2,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 3,
            extra: null,
          },
          team: {
            id: 15224,
            name: 'Real Madrid W',
            logo: 'https://media.api-sports.io/football/teams/15224.png',
          },
          player: {
            id: null,
            name: 'M. Cardona',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Normal Goal',
          comments: null,
        },
        {
          time: {
            elapsed: 6,
            extra: null,
          },
          team: {
            id: 15224,
            name: 'Real Madrid W',
            logo: 'https://media.api-sports.io/football/teams/15224.png',
          },
          player: {
            id: null,
            name: 'L. Navarro',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Normal Goal',
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 662299,
        referee: null,
        timezone: 'UTC',
        date: '2021-06-20T10:00:00+00:00',
        timestamp: 1624183200,
        periods: {
          first: 1624183200,
          second: null,
        },
        venue: {
          id: 4900,
          name: 'Umeå Energi Arena SOL',
          city: 'Umeå',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 14,
        },
      },
      league: {
        id: 736,
        name: 'Elitettan',
        country: 'Sweden',
        logo: 'https://media.api-sports.io/football/leagues/736.png',
        flag: 'https://media.api-sports.io/flags/se.svg',
        season: 2021,
        round: 'Regular Season - 10',
      },
      teams: {
        home: {
          id: 11081,
          name: 'Umeå',
          logo: 'https://media.api-sports.io/football/teams/11081.png',
          winner: null,
        },
        away: {
          id: 16006,
          name: 'Kalmar W',
          logo: 'https://media.api-sports.io/football/teams/16006.png',
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 677759,
        referee: 'Takuto Okabe, Japan',
        timezone: 'UTC',
        date: '2021-06-20T10:00:00+00:00',
        timestamp: 1624183200,
        periods: {
          first: 1624183200,
          second: null,
        },
        venue: {
          id: 980,
          name: 'Saitama Stadium 2002',
          city: 'Saitama',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 10,
        },
      },
      league: {
        id: 98,
        name: 'J. League Div.1',
        country: 'Japan',
        logo: 'https://media.api-sports.io/football/leagues/98.png',
        flag: 'https://media.api-sports.io/flags/jp.svg',
        season: 2021,
        round: 'Regular Season - 18',
      },
      teams: {
        home: {
          id: 287,
          name: 'Urawa',
          logo: 'https://media.api-sports.io/football/teams/287.png',
          winner: true,
        },
        away: {
          id: 284,
          name: 'Shonan Bellmare',
          logo: 'https://media.api-sports.io/football/teams/284.png',
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 9,
            extra: null,
          },
          team: {
            id: 287,
            name: 'Urawa',
            logo: 'https://media.api-sports.io/football/teams/287.png',
          },
          player: {
            id: 15653,
            name: 'K. Junker',
          },
          assist: {
            id: null,
            name: null,
          },
          type: 'Goal',
          detail: 'Normal Goal',
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 678529,
        referee: null,
        timezone: 'UTC',
        date: '2021-06-20T10:00:00+00:00',
        timestamp: 1624183200,
        periods: {
          first: 1624183200,
          second: null,
        },
        venue: {
          id: 2774,
          name: 'Shoda Shoyu Stadium',
          city: 'Maebashi',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 11,
        },
      },
      league: {
        id: 99,
        name: 'J. League Div.2',
        country: 'Japan',
        logo: 'https://media.api-sports.io/football/leagues/99.png',
        flag: 'https://media.api-sports.io/flags/jp.svg',
        season: 2021,
        round: 'Regular Season - 19',
      },
      teams: {
        home: {
          id: 756,
          name: 'Thespakusatsu Gunma',
          logo: 'https://media.api-sports.io/football/teams/756.png',
          winner: null,
        },
        away: {
          id: 303,
          name: 'Machida Zelvia',
          logo: 'https://media.api-sports.io/football/teams/303.png',
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 678530,
        referee: null,
        timezone: 'UTC',
        date: '2021-06-20T10:00:00+00:00',
        timestamp: 1624183200,
        periods: {
          first: 1624183200,
          second: null,
        },
        venue: {
          id: 2775,
          name: 'Mikuni World Stadium',
          city: 'Kitakyushu',
        },
        status: {
          long: 'First Half',
          short: '1H',
          elapsed: 11,
        },
      },
      league: {
        id: 99,
        name: 'J. League Div.2',
        country: 'Japan',
        logo: 'https://media.api-sports.io/football/leagues/99.png',
        flag: 'https://media.api-sports.io/flags/jp.svg',
        season: 2021,
        round: 'Regular Season - 19',
      },
      teams: {
        home: {
          id: 805,
          name: 'Kitakyushu',
          logo: 'https://media.api-sports.io/football/teams/805.png',
          winner: null,
        },
        away: {
          id: 318,
          name: 'Ehime FC',
          logo: 'https://media.api-sports.io/football/teams/318.png',
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
  ],
  cacheDate: 1624184119147,
};

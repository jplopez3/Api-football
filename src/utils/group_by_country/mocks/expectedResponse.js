export const expectedResponse = {
  Spain: {
    league: {
      'Primera Division Women': [
        {
          id: 629572,
          referee: null,
          timezone: 'UTC',
          date: '2021-06-20T09:30:00+00:00',
          timestamp: 1624181400,
          periods: {
            first: 1624181400,
            second: null,
          },
          venue: {
            id: 3994,
            name: 'Estadio Nuevo Municipal Las Gaunas',
            city: 'Logroño',
          },
          status: {
            long: 'First Half',
            short: '1H',
            elapsed: 43,
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
      ],
    },
    image: 'https://media.api-sports.io/flags/es.svg',
    totalGames: 1,
    totalLiveGames: 1,
  },
};

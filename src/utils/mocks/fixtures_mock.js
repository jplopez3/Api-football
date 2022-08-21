const fixture = {
	league: {
		id: 5,
		name: 'UEFA Nations League',
		country: 'World',
		logo: 'https://media.api-sports.io/football/leagues/5.png',
		flag: null,
		season: 2022,
		round: 'League A - 2',
	},
	teams: {
		home: {
			id: 25,
			name: 'Germany',
			logo: 'https://media.api-sports.io/football/teams/25.png',
			winner: null,
		},
		away: {
			id: 10,
			name: 'England',
			logo: 'https://media.api-sports.io/football/teams/10.png',
			winner: null,
		},
	},
	goals: {
		home: 1,
		away: 1,
	},
	score: {
		halftime: {
			home: 0,
			away: 0,
		},
		fulltime: {
			home: 1,
			away: 1,
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
				elapsed: 14,
				extra: null,
			},
			team: {
				id: 10,
				name: 'England',
				logo: 'https://media.api-sports.io/football/teams/10.png',
			},
			player: {
				id: 19130,
				name: 'K. Phillips',
			},
			assist: {
				id: 129718,
				name: 'J. Bellingham',
			},
			type: 'subst',
			detail: 'Substitution 1',
			comments: null,
		},
		{
			time: {
				elapsed: 50,
				extra: null,
			},
			team: {
				id: 25,
				name: 'Germany',
				logo: 'https://media.api-sports.io/football/teams/25.png',
			},
			player: {
				id: 25635,
				name: 'J. Hofmann',
			},
			assist: {
				id: 502,
				name: 'J. Kimmich',
			},
			type: 'Goal',
			detail: 'Normal Goal',
			comments: null,
		},
		{
			time: {
				elapsed: 65,
				extra: null,
			},
			team: {
				id: 25,
				name: 'Germany',
				logo: 'https://media.api-sports.io/football/teams/25.png',
			},
			player: {
				id: 181812,
				name: 'J. Musiala',
			},
			assist: {
				id: 1166,
				name: 'T. Werner',
			},
			type: 'subst',
			detail: 'Substitution 1',
			comments: null,
		},
		{
			time: {
				elapsed: 65,
				extra: null,
			},
			team: {
				id: 25,
				name: 'Germany',
				logo: 'https://media.api-sports.io/football/teams/25.png',
			},
			player: {
				id: 25635,
				name: 'J. Hofmann',
			},
			assist: {
				id: 510,
				name: 'S. Gnabry',
			},
			type: 'subst',
			detail: 'Substitution 2',
			comments: null,
		},
		{
			time: {
				elapsed: 72,
				extra: null,
			},
			team: {
				id: 10,
				name: 'England',
				logo: 'https://media.api-sports.io/football/teams/10.png',
			},
			player: {
				id: 19220,
				name: 'M. Mount',
			},
			assist: {
				id: 19187,
				name: 'J. Grealish',
			},
			type: 'subst',
			detail: 'Substitution 2',
			comments: null,
		},
		{
			time: {
				elapsed: 76,
				extra: null,
			},
			team: {
				id: 25,
				name: 'Germany',
				logo: 'https://media.api-sports.io/football/teams/25.png',
			},
			player: {
				id: 522,
				name: 'T. Müller',
			},
			assist: {
				id: 511,
				name: 'L. Goretzka',
			},
			type: 'subst',
			detail: 'Substitution 3',
			comments: null,
		},
		{
			time: {
				elapsed: 80,
				extra: null,
			},
			team: {
				id: 10,
				name: 'England',
				logo: 'https://media.api-sports.io/football/teams/10.png',
			},
			player: {
				id: 1460,
				name: 'B. Saka',
			},
			assist: {
				id: 19428,
				name: 'J. Bowen',
			},
			type: 'subst',
			detail: 'Substitution 3',
			comments: null,
		},
		{
			time: {
				elapsed: 83,
				extra: null,
			},
			team: {
				id: 25,
				name: 'Germany',
				logo: 'https://media.api-sports.io/football/teams/25.png',
			},
			player: {
				id: 633,
				name: 'İ. Gündoğan',
			},
			assist: {
				id: 644,
				name: 'L. Sané',
			},
			type: 'subst',
			detail: 'Substitution 4',
			comments: null,
		},
		{
			time: {
				elapsed: 86,
				extra: null,
			},
			team: {
				id: 25,
				name: 'Germany',
				logo: 'https://media.api-sports.io/football/teams/25.png',
			},
			player: {
				id: 26243,
				name: 'Nico Schlotterbeck',
			},
			assist: {
				id: null,
				name: null,
			},
			type: 'Card',
			detail: 'Yellow Card',
			comments: 'Foul',
		},
		{
			time: {
				elapsed: 86,
				extra: null,
			},
			team: {
				id: 10,
				name: 'England',
				logo: 'https://media.api-sports.io/football/teams/10.png',
			},
			player: {
				id: 184,
				name: 'Harry Kane',
			},
			assist: {
				id: null,
				name: null,
			},
			type: 'Var',
			detail: 'Penalty awarded',
			comments: null,
		},
		{
			time: {
				elapsed: 88,
				extra: null,
			},
			team: {
				id: 10,
				name: 'England',
				logo: 'https://media.api-sports.io/football/teams/10.png',
			},
			player: {
				id: 184,
				name: 'H. Kane',
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
	lineups: [
		{
			team: {
				id: 25,
				name: 'Germany',
				logo: 'https://media.api-sports.io/football/teams/25.png',
				colors: {
					player: {
						primary: 'ffffff',
						number: '000000',
						border: 'ff3300',
					},
					goalkeeper: {
						primary: 'ff3300',
						number: 'ffffff',
						border: 'ff3300',
					},
				},
			},
			coach: {
				id: 6472,
				name: 'H. Flick',
				photo: 'https://media.api-sports.io/football/coachs/6472.png',
			},
			formation: '3-4-2-1',
			startXI: [
				{
					player: {
						id: 497,
						name: 'M. Neuer',
						number: 1,
						pos: 'G',
						grid: '1:1',
					},
				},
				{
					player: {
						id: 2285,
						name: 'A. Rüdiger',
						number: 2,
						pos: 'D',
						grid: '2:3',
					},
				},
				{
					player: {
						id: 1144,
						name: 'L. Klostermann',
						number: 16,
						pos: 'D',
						grid: '2:2',
					},
				},
				{
					player: {
						id: 25158,
						name: 'D. Raum',
						number: 3,
						pos: 'M',
						grid: '2:1',
					},
				},
				{
					player: {
						id: 26243,
						name: 'N. Schlotterbeck',
						number: 23,
						pos: 'D',
						grid: '3:4',
					},
				},
				{
					player: {
						id: 633,
						name: 'İ. Gündoğan',
						number: 21,
						pos: 'M',
						grid: '3:3',
					},
				},
				{
					player: {
						id: 25635,
						name: 'J. Hofmann',
						number: 18,
						pos: 'M',
						grid: '3:2',
					},
				},
				{
					player: {
						id: 502,
						name: 'J. Kimmich',
						number: 6,
						pos: 'M',
						grid: '3:1',
					},
				},
				{
					player: {
						id: 978,
						name: 'K. Havertz',
						number: 7,
						pos: 'F',
						grid: '4:2',
					},
				},
				{
					player: {
						id: 181812,
						name: 'J. Musiala',
						number: 14,
						pos: 'F',
						grid: '4:1',
					},
				},
				{
					player: {
						id: 522,
						name: 'T. Müller',
						number: 13,
						pos: 'F',
						grid: '5:1',
					},
				},
			],
			substitutes: [
				{
					player: {
						id: 1166,
						name: 'T. Werner',
						number: 9,
						pos: 'F',
						grid: null,
					},
				},
				{
					player: {
						id: 510,
						name: 'S. Gnabry',
						number: 10,
						pos: 'M',
						grid: null,
					},
				},
				{
					player: {
						id: 511,
						name: 'L. Goretzka',
						number: 8,
						pos: 'M',
						grid: null,
					},
				},
				{
					player: {
						id: 644,
						name: 'L. Sané',
						number: 19,
						pos: 'F',
						grid: null,
					},
				},
				{
					player: {
						id: 19461,
						name: 'L. Nmecha',
						number: 11,
						pos: 'F',
						grid: null,
					},
				},
				{
					player: {
						id: 1800,
						name: 'K. Trapp',
						number: 12,
						pos: 'G',
						grid: null,
					},
				},
				{
					player: {
						id: 177665,
						name: 'A. Stach',
						number: 4,
						pos: 'M',
						grid: null,
					},
				},
				{
					player: {
						id: 702,
						name: 'O. Baumann',
						number: 22,
						pos: 'G',
						grid: null,
					},
				},
				{
					player: {
						id: 98,
						name: 'B. Henrichs',
						number: 17,
						pos: 'D',
						grid: null,
					},
				},
				{
					player: {
						id: 984,
						name: 'J. Brandt',
						number: 20,
						pos: 'M',
						grid: null,
					},
				},
				{
					player: {
						id: 506,
						name: 'N. Süle',
						number: 15,
						pos: 'D',
						grid: null,
					},
				},
				{
					player: {
						id: 261,
						name: 'T. Kehrer',
						number: 5,
						pos: 'D',
						grid: null,
					},
				},
			],
		},
		{
			team: {
				id: 10,
				name: 'England',
				logo: 'https://media.api-sports.io/football/teams/10.png',
				colors: {
					player: {
						primary: '0f24c2',
						number: 'fb0404',
						border: 'ffff00',
					},
					goalkeeper: {
						primary: 'ffff00',
						number: '000000',
						border: 'ffff00',
					},
				},
			},
			coach: {
				id: 173,
				name: 'G. Southgate',
				photo: 'https://media.api-sports.io/football/coachs/173.png',
			},
			formation: '4-2-3-1',
			startXI: [
				{
					player: {
						id: 2932,
						name: 'J. Pickford',
						number: 1,
						pos: 'G',
						grid: '1:1',
					},
				},
				{
					player: {
						id: 627,
						name: 'K. Walker',
						number: 2,
						pos: 'D',
						grid: '2:4',
					},
				},
				{
					player: {
						id: 169,
						name: 'K. Trippier',
						number: 3,
						pos: 'D',
						grid: '2:3',
					},
				},
				{
					player: {
						id: 2935,
						name: 'H. Maguire',
						number: 6,
						pos: 'D',
						grid: '2:2',
					},
				},
				{
					player: {
						id: 626,
						name: 'J. Stones',
						number: 5,
						pos: 'D',
						grid: '2:1',
					},
				},
				{
					player: {
						id: 19220,
						name: 'M. Mount',
						number: 11,
						pos: 'M',
						grid: '3:2',
					},
				},
				{
					player: {
						id: 19130,
						name: 'K. Phillips',
						number: 8,
						pos: 'M',
						grid: '3:1',
					},
				},
				{
					player: {
						id: 2937,
						name: 'D. Rice',
						number: 4,
						pos: 'M',
						grid: '4:3',
					},
				},
				{
					player: {
						id: 184,
						name: 'H. Kane',
						number: 9,
						pos: 'F',
						grid: '4:2',
					},
				},
				{
					player: {
						id: 645,
						name: 'R. Sterling',
						number: 10,
						pos: 'M',
						grid: '4:1',
					},
				},
				{
					player: {
						id: 1460,
						name: 'B. Saka',
						number: 7,
						pos: 'M',
						grid: '5:1',
					},
				},
			],
			substitutes: [
				{
					player: {
						id: 129718,
						name: 'J. Bellingham',
						number: 19,
						pos: 'M',
						grid: null,
					},
				},
				{
					player: {
						id: 19187,
						name: 'J. Grealish',
						number: 14,
						pos: 'M',
						grid: null,
					},
				},
				{
					player: {
						id: 19428,
						name: 'J. Bowen',
						number: 20,
						pos: 'F',
						grid: null,
					},
				},
				{
					player: {
						id: 20355,
						name: 'A. Ramsdale',
						number: 22,
						pos: 'G',
						grid: null,
					},
				},
				{
					player: {
						id: 67971,
						name: 'M. Guéhi',
						number: 15,
						pos: 'D',
						grid: null,
					},
				},
				{
					player: {
						id: 67972,
						name: 'C. Gallagher',
						number: 18,
						pos: 'M',
						grid: null,
					},
				},
				{
					player: {
						id: 2938,
						name: 'J. Ward-Prowse',
						number: 17,
						pos: 'M',
						grid: null,
					},
				},
				{
					player: {
						id: 19545,
						name: 'R. James',
						number: 12,
						pos: 'D',
						grid: null,
					},
				},
				{
					player: {
						id: 18911,
						name: 'N. Pope',
						number: 13,
						pos: 'G',
						grid: null,
					},
				},
				{
					player: {
						id: 18741,
						name: 'C. Coady',
						number: 16,
						pos: 'D',
						grid: null,
					},
				},
				{
					player: {
						id: 19194,
						name: 'T. Abraham',
						number: 23,
						pos: 'F',
						grid: null,
					},
				},
				{
					player: {
						id: 283,
						name: 'T. Alexander-Arnold',
						number: 21,
						pos: 'D',
						grid: null,
					},
				},
			],
		},
	],
	statistics: [
		{
			team: {
				id: 25,
				name: 'Germany',
				logo: 'https://media.api-sports.io/football/teams/25.png',
			},
			statistics: [
				{
					type: 'Shots on Goal',
					value: 6,
				},
				{
					type: 'Shots off Goal',
					value: 1,
				},
				{
					type: 'Total Shots',
					value: 10,
				},
				{
					type: 'Blocked Shots',
					value: 3,
				},
				{
					type: 'Shots insidebox',
					value: 9,
				},
				{
					type: 'Shots outsidebox',
					value: 1,
				},
				{
					type: 'Fouls',
					value: 4,
				},
				{
					type: 'Corner Kicks',
					value: 5,
				},
				{
					type: 'Offsides',
					value: 4,
				},
				{
					type: 'Ball Possession',
					value: '63%',
				},
				{
					type: 'Yellow Cards',
					value: 1,
				},
				{
					type: 'Red Cards',
					value: null,
				},
				{
					type: 'Goalkeeper Saves',
					value: 5,
				},
				{
					type: 'Total passes',
					value: 605,
				},
				{
					type: 'Passes accurate',
					value: 531,
				},
				{
					type: 'Passes %',
					value: '88%',
				},
			],
		},
		{
			team: {
				id: 10,
				name: 'England',
				logo: 'https://media.api-sports.io/football/teams/10.png',
			},
			statistics: [
				{
					type: 'Shots on Goal',
					value: 6,
				},
				{
					type: 'Shots off Goal',
					value: 5,
				},
				{
					type: 'Total Shots',
					value: 15,
				},
				{
					type: 'Blocked Shots',
					value: 4,
				},
				{
					type: 'Shots insidebox',
					value: 9,
				},
				{
					type: 'Shots outsidebox',
					value: 6,
				},
				{
					type: 'Fouls',
					value: 7,
				},
				{
					type: 'Corner Kicks',
					value: 8,
				},
				{
					type: 'Offsides',
					value: 1,
				},
				{
					type: 'Ball Possession',
					value: '37%',
				},
				{
					type: 'Yellow Cards',
					value: null,
				},
				{
					type: 'Red Cards',
					value: null,
				},
				{
					type: 'Goalkeeper Saves',
					value: 5,
				},
				{
					type: 'Total passes',
					value: 352,
				},
				{
					type: 'Passes accurate',
					value: 278,
				},
				{
					type: 'Passes %',
					value: '79%',
				},
			],
		},
	],
	players: [
		{
			team: {
				id: 25,
				name: 'Germany',
				logo: 'https://media.api-sports.io/football/teams/25.png',
				update: '2022-06-16T04:01:27+00:00',
			},
			players: [
				{
					player: {
						id: 497,
						name: 'Manuel Neuer',
						photo:
							'https://media.api-sports.io/football/players/497.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 1,
								position: 'G',
								rating: '7.3',
								captain: true,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 1,
								assists: null,
								saves: 5,
							},
							passes: {
								total: 57,
								key: null,
								accuracy: '52',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 1,
								won: 1,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: 0,
							},
						},
					],
				},
				{
					player: {
						id: 1144,
						name: 'Lukas Klostermann',
						photo:
							'https://media.api-sports.io/football/players/1144.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 16,
								position: 'D',
								rating: '7.5',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 57,
								key: null,
								accuracy: '51',
							},
							tackles: {
								total: 5,
								blocks: null,
								interceptions: 4,
							},
							duels: {
								total: 9,
								won: 6,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: 1,
							},
							fouls: {
								drawn: 1,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 2285,
						name: 'Antonio Rüdiger',
						photo:
							'https://media.api-sports.io/football/players/2285.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 2,
								position: 'D',
								rating: '7',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 80,
								key: null,
								accuracy: '74',
							},
							tackles: {
								total: 1,
								blocks: 1,
								interceptions: null,
							},
							duels: {
								total: 2,
								won: 1,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 26243,
						name: 'Nico Schlotterbeck',
						photo:
							'https://media.api-sports.io/football/players/26243.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 23,
								position: 'D',
								rating: '6.9',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: 1,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 99,
								key: null,
								accuracy: '84',
							},
							tackles: {
								total: 1,
								blocks: 1,
								interceptions: 1,
							},
							duels: {
								total: 10,
								won: 8,
							},
							dribbles: {
								attempts: 1,
								success: 1,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: 1,
							},
							cards: {
								yellow: 1,
								red: 0,
							},
							penalty: {
								won: null,
								commited: 1,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 25635,
						name: 'Jonas Hofmann',
						photo:
							'https://media.api-sports.io/football/players/25635.png',
					},
					statistics: [
						{
							games: {
								minutes: 65,
								number: 18,
								position: 'M',
								rating: '7.5',
								captain: false,
								substitute: false,
							},
							offsides: 1,
							shots: {
								total: 1,
								on: 1,
							},
							goals: {
								total: 1,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 22,
								key: null,
								accuracy: '17',
							},
							tackles: {
								total: 1,
								blocks: 1,
								interceptions: null,
							},
							duels: {
								total: 3,
								won: 2,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: 1,
							},
							fouls: {
								drawn: 1,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 502,
						name: 'Joshua Kimmich',
						photo:
							'https://media.api-sports.io/football/players/502.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 6,
								position: 'M',
								rating: '7.9',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: 1,
								saves: null,
							},
							passes: {
								total: 70,
								key: 2,
								accuracy: '64',
							},
							tackles: {
								total: 4,
								blocks: null,
								interceptions: 1,
							},
							duels: {
								total: 9,
								won: 6,
							},
							dribbles: {
								attempts: 1,
								success: null,
								past: 2,
							},
							fouls: {
								drawn: 1,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 633,
						name: 'İlkay Gündoğan',
						photo:
							'https://media.api-sports.io/football/players/633.png',
					},
					statistics: [
						{
							games: {
								minutes: 83,
								number: 21,
								position: 'M',
								rating: '6.3',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 63,
								key: null,
								accuracy: '59',
							},
							tackles: {
								total: 1,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 4,
								won: 1,
							},
							dribbles: {
								attempts: 1,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 25158,
						name: 'David Raum',
						photo:
							'https://media.api-sports.io/football/players/25158.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 3,
								position: 'M',
								rating: '7.3',
								captain: false,
								substitute: false,
							},
							offsides: 1,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 42,
								key: 5,
								accuracy: '33',
							},
							tackles: {
								total: 4,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 4,
								won: 4,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 522,
						name: 'Thomas Müller',
						photo:
							'https://media.api-sports.io/football/players/522.png',
					},
					statistics: [
						{
							games: {
								minutes: 76,
								number: 13,
								position: 'F',
								rating: '7.2',
								captain: false,
								substitute: false,
							},
							offsides: 1,
							shots: {
								total: 1,
								on: 1,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 36,
								key: 1,
								accuracy: '27',
							},
							tackles: {
								total: 1,
								blocks: null,
								interceptions: 1,
							},
							duels: {
								total: 11,
								won: 5,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: 1,
							},
							fouls: {
								drawn: 3,
								committed: 1,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 181812,
						name: 'Jamal Musiala',
						photo:
							'https://media.api-sports.io/football/players/181812.png',
					},
					statistics: [
						{
							games: {
								minutes: 65,
								number: 14,
								position: 'F',
								rating: '6.5',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: 1,
								on: 1,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 19,
								key: null,
								accuracy: '16',
							},
							tackles: {
								total: 1,
								blocks: 1,
								interceptions: null,
							},
							duels: {
								total: 14,
								won: 3,
							},
							dribbles: {
								attempts: 4,
								success: 2,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: 1,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 978,
						name: 'Kai Havertz',
						photo:
							'https://media.api-sports.io/football/players/978.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 7,
								position: 'F',
								rating: '7.2',
								captain: false,
								substitute: false,
							},
							offsides: 1,
							shots: {
								total: 2,
								on: 2,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 32,
								key: 2,
								accuracy: '29',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: 1,
							},
							duels: {
								total: 9,
								won: 3,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: 1,
							},
							fouls: {
								drawn: 1,
								committed: 1,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 702,
						name: 'Oliver Baumann',
						photo:
							'https://media.api-sports.io/football/players/702.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 22,
								position: 'G',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 1800,
						name: 'Kevin Trapp',
						photo:
							'https://media.api-sports.io/football/players/1800.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 12,
								position: 'G',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 261,
						name: 'Thilo Kehrer',
						photo:
							'https://media.api-sports.io/football/players/261.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 5,
								position: 'D',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 506,
						name: 'Niklas Süle',
						photo:
							'https://media.api-sports.io/football/players/506.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 15,
								position: 'D',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 984,
						name: 'Julian Brandt',
						photo:
							'https://media.api-sports.io/football/players/984.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 20,
								position: 'M',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 98,
						name: 'Benjamin Henrichs',
						photo:
							'https://media.api-sports.io/football/players/98.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 17,
								position: 'D',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 177665,
						name: 'Anton Stach',
						photo:
							'https://media.api-sports.io/football/players/177665.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 4,
								position: 'M',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 644,
						name: 'Leroy Sané',
						photo:
							'https://media.api-sports.io/football/players/644.png',
					},
					statistics: [
						{
							games: {
								minutes: 12,
								number: 19,
								position: 'F',
								rating: '6.3',
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 2,
								key: null,
								accuracy: '2',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 510,
						name: 'Serge Gnabry',
						photo:
							'https://media.api-sports.io/football/players/510.png',
					},
					statistics: [
						{
							games: {
								minutes: 25,
								number: 10,
								position: 'M',
								rating: '6.3',
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 8,
								key: null,
								accuracy: '7',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 511,
						name: 'Leon Goretzka',
						photo:
							'https://media.api-sports.io/football/players/511.png',
					},
					statistics: [
						{
							games: {
								minutes: 14,
								number: 8,
								position: 'M',
								rating: '6.5',
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 11,
								key: null,
								accuracy: '10',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 1,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 19461,
						name: 'Lukas Nmecha',
						photo:
							'https://media.api-sports.io/football/players/19461.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 11,
								position: 'F',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 1166,
						name: 'Timo Werner',
						photo:
							'https://media.api-sports.io/football/players/1166.png',
					},
					statistics: [
						{
							games: {
								minutes: 25,
								number: 9,
								position: 'F',
								rating: '6.6',
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: 1,
								on: 1,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 7,
								key: null,
								accuracy: '6',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
			],
		},
		{
			team: {
				id: 10,
				name: 'England',
				logo: 'https://media.api-sports.io/football/teams/10.png',
				update: '2022-06-16T04:01:27+00:00',
			},
			players: [
				{
					player: {
						id: 2932,
						name: 'Jordan Pickford',
						photo:
							'https://media.api-sports.io/football/players/2932.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 1,
								position: 'G',
								rating: '7.3',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 1,
								assists: null,
								saves: 5,
							},
							passes: {
								total: 29,
								key: null,
								accuracy: '13',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: 0,
							},
						},
					],
				},
				{
					player: {
						id: 627,
						name: 'Kyle Walker',
						photo:
							'https://media.api-sports.io/football/players/627.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 2,
								position: 'D',
								rating: '7',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 38,
								key: null,
								accuracy: '31',
							},
							tackles: {
								total: 1,
								blocks: null,
								interceptions: 3,
							},
							duels: {
								total: 3,
								won: 3,
							},
							dribbles: {
								attempts: 1,
								success: 1,
								past: null,
							},
							fouls: {
								drawn: 1,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 626,
						name: 'John Stones',
						photo:
							'https://media.api-sports.io/football/players/626.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 5,
								position: 'D',
								rating: '6.6',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: 2,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 44,
								key: 1,
								accuracy: '40',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 2,
								won: 1,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 2935,
						name: 'Harry Maguire',
						photo:
							'https://media.api-sports.io/football/players/2935.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 6,
								position: 'D',
								rating: '6.9',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: 1,
								on: 1,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 36,
								key: null,
								accuracy: '27',
							},
							tackles: {
								total: null,
								blocks: 1,
								interceptions: null,
							},
							duels: {
								total: 8,
								won: 5,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: 1,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 169,
						name: 'Kieran Trippier',
						photo:
							'https://media.api-sports.io/football/players/169.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 3,
								position: 'D',
								rating: '7.5',
								captain: false,
								substitute: false,
							},
							offsides: 1,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 41,
								key: 4,
								accuracy: '34',
							},
							tackles: {
								total: 1,
								blocks: 1,
								interceptions: 4,
							},
							duels: {
								total: 3,
								won: 1,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: 1,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 2937,
						name: 'Declan Rice',
						photo:
							'https://media.api-sports.io/football/players/2937.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 4,
								position: 'M',
								rating: '6.9',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 41,
								key: null,
								accuracy: '37',
							},
							tackles: {
								total: 4,
								blocks: 1,
								interceptions: 1,
							},
							duels: {
								total: 10,
								won: 5,
							},
							dribbles: {
								attempts: 1,
								success: null,
								past: 1,
							},
							fouls: {
								drawn: null,
								committed: 2,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 19130,
						name: 'Kalvin Phillips',
						photo:
							'https://media.api-sports.io/football/players/19130.png',
					},
					statistics: [
						{
							games: {
								minutes: 14,
								number: 8,
								position: 'M',
								rating: '6.3',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 1,
								key: null,
								accuracy: '1',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 1460,
						name: 'Bukayo Saka',
						photo:
							'https://media.api-sports.io/football/players/1460.png',
					},
					statistics: [
						{
							games: {
								minutes: 80,
								number: 7,
								position: 'M',
								rating: '6.3',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: 2,
								on: 1,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 11,
								key: 1,
								accuracy: '7',
							},
							tackles: {
								total: 2,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 8,
								won: 3,
							},
							dribbles: {
								attempts: 2,
								success: null,
								past: 1,
							},
							fouls: {
								drawn: 1,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 19220,
						name: 'Mason Mount',
						photo:
							'https://media.api-sports.io/football/players/19220.png',
					},
					statistics: [
						{
							games: {
								minutes: 72,
								number: 11,
								position: 'M',
								rating: '7',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: 1,
								on: 1,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 14,
								key: 2,
								accuracy: '13',
							},
							tackles: {
								total: 2,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 7,
								won: 4,
							},
							dribbles: {
								attempts: 3,
								success: 2,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: 1,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 645,
						name: 'Raheem Sterling',
						photo:
							'https://media.api-sports.io/football/players/645.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 10,
								position: 'M',
								rating: '6.3',
								captain: false,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: 1,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 20,
								key: 1,
								accuracy: '15',
							},
							tackles: {
								total: 1,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 9,
								won: 2,
							},
							dribbles: {
								attempts: 4,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: 2,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 184,
						name: 'Harry Kane',
						photo:
							'https://media.api-sports.io/football/players/184.png',
					},
					statistics: [
						{
							games: {
								minutes: 90,
								number: 9,
								position: 'F',
								rating: '7',
								captain: true,
								substitute: false,
							},
							offsides: null,
							shots: {
								total: 4,
								on: 3,
							},
							goals: {
								total: 1,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 26,
								key: 1,
								accuracy: '18',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 11,
								won: 4,
							},
							dribbles: {
								attempts: 4,
								success: 2,
								past: null,
							},
							fouls: {
								drawn: 1,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: 1,
								commited: null,
								scored: 1,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 20355,
						name: 'Aaron Ramsdale',
						photo:
							'https://media.api-sports.io/football/players/20355.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 22,
								position: 'G',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 18911,
						name: 'Nick Pope',
						photo:
							'https://media.api-sports.io/football/players/18911.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 13,
								position: 'G',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 18741,
						name: 'Conor Coady',
						photo:
							'https://media.api-sports.io/football/players/18741.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 16,
								position: 'D',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 283,
						name: 'Trent Alexander-Arnold',
						photo:
							'https://media.api-sports.io/football/players/283.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 21,
								position: 'D',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 67971,
						name: 'Marc Guéhi',
						photo:
							'https://media.api-sports.io/football/players/67971.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 15,
								position: 'D',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 129718,
						name: 'Jude Bellingham',
						photo:
							'https://media.api-sports.io/football/players/129718.png',
					},
					statistics: [
						{
							games: {
								minutes: 76,
								number: 19,
								position: 'M',
								rating: '7.7',
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 35,
								key: 1,
								accuracy: '31',
							},
							tackles: {
								total: 7,
								blocks: null,
								interceptions: 3,
							},
							duels: {
								total: 13,
								won: 9,
							},
							dribbles: {
								attempts: 2,
								success: 1,
								past: 1,
							},
							fouls: {
								drawn: 1,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 2938,
						name: 'James Ward-Prowse',
						photo:
							'https://media.api-sports.io/football/players/2938.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 17,
								position: 'M',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 67972,
						name: 'Conor Gallagher',
						photo:
							'https://media.api-sports.io/football/players/67972.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 18,
								position: 'M',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 19428,
						name: 'Jarrod Bowen',
						photo:
							'https://media.api-sports.io/football/players/19428.png',
					},
					statistics: [
						{
							games: {
								minutes: 10,
								number: 20,
								position: 'F',
								rating: '6.3',
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 2,
								key: null,
								accuracy: '1',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 2,
								won: null,
							},
							dribbles: {
								attempts: 2,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 19545,
						name: 'Reece James',
						photo:
							'https://media.api-sports.io/football/players/19545.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 12,
								position: 'D',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 19194,
						name: 'Tammy Abraham',
						photo:
							'https://media.api-sports.io/football/players/19194.png',
					},
					statistics: [
						{
							games: {
								minutes: null,
								number: 23,
								position: 'F',
								rating: null,
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: null,
								key: null,
								accuracy: null,
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: null,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
				{
					player: {
						id: 19187,
						name: 'Jack Grealish',
						photo:
							'https://media.api-sports.io/football/players/19187.png',
					},
					statistics: [
						{
							games: {
								minutes: 18,
								number: 14,
								position: 'M',
								rating: '6.9',
								captain: false,
								substitute: true,
							},
							offsides: null,
							shots: {
								total: null,
								on: null,
							},
							goals: {
								total: null,
								conceded: 0,
								assists: null,
								saves: null,
							},
							passes: {
								total: 14,
								key: 1,
								accuracy: '10',
							},
							tackles: {
								total: null,
								blocks: null,
								interceptions: null,
							},
							duels: {
								total: 1,
								won: null,
							},
							dribbles: {
								attempts: null,
								success: null,
								past: null,
							},
							fouls: {
								drawn: null,
								committed: null,
							},
							cards: {
								yellow: 0,
								red: 0,
							},
							penalty: {
								won: null,
								commited: null,
								scored: 0,
								missed: 0,
								saved: null,
							},
						},
					],
				},
			],
		},
	],
};

export default ({ date, shortStatus }) => {
	const fixtureResponse = {
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
		response: [],
		cacheDate: 1624184119147,
	};

	const fixtureData = createFixture({ date, shortStatus });
	fixtureResponse.response.push({
		...fixtureData,
		...fixture,
	});

	return { data: fixtureResponse };
};

function createFixture({ date, shortStatus }) {
	date = new Date(date);

	return {
		fixture: {
			id: 938605,
			referee: null,
			timezone: 'UTC',
			date: date,
			timestamp: date.getTime(),
			periods: {
				first: null,
				second: null,
			},
			venue: {
				id: 2565,
				name: 'T.K. Shutter Reserve',
				city: 'Adelaide',
			},
			status: {
				long: null,
				short: shortStatus,
				elapsed: null,
			},
		},
	};
}

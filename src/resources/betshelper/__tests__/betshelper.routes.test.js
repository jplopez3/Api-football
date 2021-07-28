import request from 'supertest';
import App from '../../../loaders/app.js';
const outscoreApp = new App().app;

// example of teams with ID 1158 and 130;
// 1- create endpoint called BetsHelper with parameters of Home and Away that receive an ID - /betshelper?home=1158&away=130;
// 2- on backend receive this 2 ID's and call the api endpoint fixtures?team=1158&last=5 e fixtures?team=130&last=5 e headtohead?h2h=1158-130 where last=5 means last 5 games.
// 3 - with response of this 3 calls we get 15 games and we call the fixtureID endpoint fixtures?id=706464&timezone=Europe/Amsterdam for each game ID;
// 4- response to FrontEnd on this format: {
// home: [//last5 games of home team],
// away: [//last 5 games of away team],
// h2h"[//last 5 games between both teams]
// }

// Future request:
// add DB so we can store games where users already visited.

describe('betshelper tests', () => {
  test('should return a 200 code in /api/v3/betshelper', async () => {
    const response = await request(outscoreApp)
      .get('/api/v3/betshelper?home=30&away=41')
      .set('Accept', 'application/json');

    console.log(response.statusCode);
    expect(response.statusCode).toBe(200);
  });
});

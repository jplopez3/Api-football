import request from 'supertest';
import App from '../../../loaders/app.js';
const outscoreApp = new App().app;

describe('betshelper tests', () => {
  test('should return a 200 code in /api/v3/betshelper', async () => {
    const response = await request(outscoreApp)
      .get('/api/v3/betshelper?home=30&away=41')
      .set('Accept', 'application/json');

    console.log(response.statusCode);
    expect(response.statusCode).toBe(200);
  });
});

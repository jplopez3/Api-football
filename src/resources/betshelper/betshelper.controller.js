import { BetsHelper } from './betshelper.model.js';
import Logger from '../../loaders/winston.js';

export default async (req, res, next) => {
  try {
    const { home, away } = req.query;
    const last = 3;
    const betsHelper = new BetsHelper(last);

    let { homeFixtures, awayFixtures, h2hFixtures } = await asyncCall([
      betsHelper.getFixturesByTeam(home),
      betsHelper.getFixturesByTeam(away),
      betsHelper.getH2H({ home, away })
    ]);

    const homeFixturesIds = betsHelper.getFixturesID(homeFixtures);
    const awayFixturesIds = betsHelper.getFixturesID(awayFixtures);
    const h2hFixturesIds = betsHelper.getFixturesID(h2hFixtures);

    ({ homeFixtures, awayFixtures, h2hFixtures } = await asyncCall([
      betsHelper.getFixturesByIdList(homeFixturesIds),
      betsHelper.getFixturesByIdList(awayFixturesIds),
      betsHelper.getFixturesByIdList(h2hFixturesIds)
    ]));

    const response = createResponse({
      homeFixtures,
      awayFixturesIds,
      h2hFixturesIds,
    });
    res.status(200);
    res.json(response);
  } catch (error) {
    Logger.error('Betshelper.controller.js  %O', error);
    next(error);
  }
};

const asyncCall = (asyncCallIterable) => {
  return Promise.all(asyncCallIterable)
    .then((data) => {
      return {
        homeFixtures: data[0],
        awayFixtures: data[1],
        h2hFixtures: data[0]
      };
    })
    .catch((err) => {
      Logger.error('betshelper.controller.js -> asyncCall() catch: %O', err);
      throw err;
    });
};

const createResponse = ({ homeFixtures, awayFixtures, h2hFixtures }) => {
  console.log('Resposnse', { homeFixtures, awayFixtures, h2hFixtures });
  return {
    home: homeFixtures,
    away: awayFixtures,
    h2h: h2hFixtures,
  };
};

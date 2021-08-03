import cacheFactory from '../../utils/cache/CacheFactory.js';
import Logger from '../../loaders/winston.js';
import { BetsHelper, Response, getData } from './betshelper.model.js';

export default async (req, res) => {
  const result = isValidRequest(req);
  if (result.length > 0) {
    res.status(400);
    res.json({ error: ` Missing required fields: [${result.toString()}]` });
    return;
  }

  try {
    const { home, away } = req.query;
    const last = 3;
    const betsHelper = new BetsHelper(last);

    let homeFixtures = await betsHelper.getFixturesByTeam(home);
    let awayFixtures = await betsHelper.getFixturesByTeam(away);
    let h2hFixtures = await betsHelper.getH2H({ home, away });

    const homeFixturesIds = betsHelper.getFixturesID(homeFixtures);
    const awayFixturesIds = betsHelper.getFixturesID(awayFixtures);
    const h2hFixturesIds = betsHelper.getFixturesID(h2hFixtures);

    homeFixtures = await betsHelper.getFixturesByIdList(homeFixturesIds);
    awayFixtures = await betsHelper.getFixturesByIdList(awayFixturesIds);
    h2hFixtures = await betsHelper.getFixturesByIdList(h2hFixturesIds);
    
    Logger.warn('homeFixtures %O', homeFixtures)
    const response = new Response({ homeFixtures, awayFixtures, h2hFixtures });

    res.status(200);
    res.json(response.get());
  } catch (error) {
    Logger.error('Betshelper.controller.js  %O', error);
  }
};

const isValidRequest = (req) => {
  const requiredFields = ['home', 'away'];
  const missingParams = requiredFields.filter((field) => {
    return !req.query[field];
  });

  return missingParams;
};

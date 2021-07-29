import cacheFactory from '../../utils/cache/CacheFactory.js';
import Logger from '../../loaders/winston.js';
import {BetsHelper, Response, getData} from './betshelper.model.js';

const fixturesCache = cacheFactory.get('/fixtures');
const headToHeadCache = cacheFactory.get('/fixtures/headtohead');
export default async (req, res) => {
  const result = isValidRequest(req);
  if (result.length > 0) {
    res.status(400);
    res.json({ error: ` Missing required fields: [${result.toString()}]` });
    return;
  }
  const betsHelper = new BetsHelper(req.query.home, req.query.away);

  try {
    const homeData = await getData(
      fixturesCache,
      betsHelper.fixturesQueryString(req.query.home),
      betsHelper.fixturesHome,
    );
    const awayData = await getData(
      fixturesCache,
      betsHelper.fixturesQueryString(req.query.away),
      betsHelper.fixturesAway,
    );
    const h2hData = await getData(
      headToHeadCache,
      betsHelper.h2hQueryString,
      betsHelper.h2h,
    );

    const response = new Response({ homeData, awayData, h2hData });

    res.status(200);
    res.json(response.final);
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
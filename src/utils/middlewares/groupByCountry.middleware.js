import groupByCountry from '../group_by_country/groupByCountry.js';
export default (req, res, next) => {
  if (!res.locals?.cachedData || !res.locals?.cachedData?.response) {
    return next();
  }

  res.locals.cachedData.response = groupByCountry(
    res.locals.cachedData.response,
  );

  next();
};

import groupByCountry from '../group_by_country/groupByCountry.js';

export default function (queryStringsToGroup = null) {

  return (req, res, next) => {
    if(hasAlreadyCachedData(res) || !isQueryStringToGroup(req, queryStringsToGroup)){
      return next();
    }
  
    res.locals.cachedData = groupByCountry(
      res.locals.cachedData.response,
    );
  
    next();
  };
}
 
export const hasAlreadyCachedData = (res) => {
 return !res.locals?.cachedData || !res.locals?.cachedData?.response;
}

export const isQueryStringToGroup = (req, queryStringsToGroup) => {
  const result = Object.keys(req.query).some(key => queryStringsToGroup.includes(key))
  console.log(result ,queryStringsToGroup, Object.keys(req.query))
  return result;
}
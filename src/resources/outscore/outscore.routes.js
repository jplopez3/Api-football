import { Router } from 'express';
const router = Router();

router.get('/endPoints', (req, res) => {});

//Todo: add template engine to show this info
router.get('/info', function (req, res) {
  let text = '';
  // outscore._activeEndPoints.forEach(({ url, cache, responseTimes }) => {
  //   console.log(Object.keys(cache.cache));
  //   console.log(cache.cache.options.stdTTL);
  //   console.log(cache.cache.getStats());
  //   console.log(cache.cache.keys());
  //   console.log(cache.cache.flushStats());

  //   const { tll, keys, getStats } = cache.cache;
  //   const stats = getStats();

  //   let hits = stats.hits;
  //   let misses = stats.misses;
  //   text += `<h1>${url}</h1>
  //     <h3>Calls made to Football API: ${misses}</h3>
  //     <h3>Number of cache hits: ${hits}</h3>
  //     <h3>Cached params: ${keys}</h3>
  //     <h3>Cached params Time to live in Milliseconds: ${ttl.toString()}</h3>
  //     <h2>Server Response Times</h2>
  //     <br>
  //     `;
  // <h3>Last 50 calls: ${responseTimes.measureServerResponseTime.getHistory()}</h3>
  // <h3>Average: ${responseTimes.measureServerResponseTime.getHistoricAverage()}</h3>
  // <h2>Football API Response Times</h2>
  // <h3>Last 50 calls: ${responseTimes.measureAPICallResponseTime.getHistory()}</h3>
  // <h3>Average: ${responseTimes.measureAPICallResponseTime.getHistoricAverage()}</h3>
  // });
  res.send(text);
});

export default router;

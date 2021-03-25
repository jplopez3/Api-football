import { server } from '../loaders/express.js';
import Outscore from './Outscore.js';
import Logger from '../loaders/winston.js';
const OutscoreServer = new Outscore(server);
const PORT = process.env.PORT || 5000;
//server.use( '/api/v3', router );
/**
 * Health Check endpoints
 */
server.get('/ping', (req, res) => {
  res.status(200).end('pong');
});
server.head('/status', (req, res) => {
  res.status(200).end();
});
server.get('/endPoints', (req, res) => {
  res.json(OutscoreServer.endPoints);
});

//Todo: add template engine to show this info
server.get( '/info', function ( req, res ) {
	let text = '';
	OutscoreServer.endPoints.forEach( ( { stats, url, keys, responseTimes, ttl } ) => {
		let hits = stats.hits;
		let misses = stats.misses;
		text += `<h1>${url}</h1>
    <h3>Calls made to Football API: ${misses}</h3>
    <h3>Number of cache hits: ${hits}</h3>
    <h3>Cached params: ${keys}</h3>
    <h3>Cached params Time to live in Milliseconds: ${ttl.toString()}</h3>
	<h2>Server Response Times</h2>
	<h3>Last 50 calls: ${responseTimes.measureServerResponseTime.getHistory()}</h3>
	<h3>Average: ${responseTimes.measureServerResponseTime.getHistoricAverage()}</h3>
	<h2>Football API Response Times</h2>
	<h3>Last 50 calls: ${responseTimes.measureAPICallResponseTime.getHistory()}</h3>
	<h3>Average: ${responseTimes.measureAPICallResponseTime.getHistoricAverage()}</h3>
	<br>
    `;
	} );
	res.send( text );
} );

//Todo: remove
server.get('/env', function (req, res) {
  res.json(process.env);
});

export default () => {
  server.listen(PORT, () => {
    Logger.warn('Listening on ${PORT}');
  });
};
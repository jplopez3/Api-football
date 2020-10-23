import { server, router } from './loaders/express.js';
import Outscore from './Outscore.js';

const OutscoreServer = new Outscore( router );
const PORT = process.env.PORT || 5000;

router.get( '/', ( req, res ) => {
	res.json( OutscoreServer.endPoints );
} );

server.get( '/', function( req, res ) {
	let text='';
	OutscoreServer.endPoints.forEach( ( { stats, url, keys } )=>{
		let hits = stats.hits;
		let misses = stats.misses;
		text += `<h2>${url}</h2>
    <h3>Calls made to Football API ${misses}</h3> 
    <h3>Number of cache hits ${hits}</h3>
    <h3>Cached params ${keys}</h3>
    `;
	} );
	res.send( text );
} );

server.get( '/env', function( req, res ) {
	res.json( process.env );
} );

/**
   * Health Check endpoints
   */
server.get( '/ping', ( req, res ) => {
	res.status( 200 ).end( 'pong' );
} );
server.head( '/status', ( req, res ) => {
	res.status( 200 ).end();
} );

server.use( '/api/v3', router );
server.listen( PORT, () => console.log( `Listening on ${ PORT }` ) );


  
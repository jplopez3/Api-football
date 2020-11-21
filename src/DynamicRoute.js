import process from 'process';
import NodeCache  from 'node-cache';
import { defaultCacheConfig } from './config/index.js';
import zlib from 'zlib';
import { apiFootballInstance } from './loaders/axios.js';

class DynamicRoute {
	constructor({ router, url, cache, axios } ){

		this.router = router;
		this.url = url;
		this.cache = cache;
		this.axios = axios;
		this.router.get( `${this.url}`, ( req, res ) => { 
			//this.measureServerResponseTime.start();
			console.time( this.url );
			this.res = res;
			this.routerConfig = this.getRouteConfig( req );
			console.log( 'router.get', this.url, this.routerConfig ); 

			this.isDataInCache()
				.then( ( data ) => {this.responseSuccess( data );} )
				.catch( () => {this.fetchFromApi();} );
		} );
	}

	async isDataInCache(){
		let data = this.cache.get( this.routerConfig.cacheKey );
		let isDataUndefined = data == undefined;

		console.info( 'isDataInCache:' + !isDataUndefined );

		if( isDataUndefined ){
			return Promise.reject( 'empty cache' );
		}
		return Promise.resolve( data );
	}
	fetchFromApi () {
		//this.measureAPICallResponseTime.start();
		console.log( 'fetchFromApi', this.url, this.routerConfig.queryParams );
		this.axios.get( this.url, this.routerConfig.queryParams )
			.then( ( response ) => {
				
				response.data.cacheDate = new Date().getTime();
				console.info( 'fetchFromApi response', this.url, response.status );
				this.cache.set( this.routerConfig.cacheKey, response.data, this.cacheStdTTL );
				
				this.responseSuccess( response.data );
				
			} )
			.catch( ( err )=> {console.log('fetchFromApi catch'); this.res.json( err ) } );
	}

	getRouteConfig( req ) {
		if(req.query['clearCache']){
			this.cache.flushAll();
			this.responseSuccess( { result: 'CLEAR CACHE SUCCESS' } );
			console.info( 'CLEAR CACHE SUCCESS' );
			return;
		}
		const queryParams = {};
		console.log('getRouteConfig',req.query);
		queryParams['params'] = req.query ? req.query : {};

		return{
			queryParams,
			cacheKey: req.url
		};
	}
}
export default class endPoint extends DynamicRoute {
	constructor( { router, url, cacheStdTTL, axios = apiFootballInstance } ){
		super(  {router, url, cacheStdTTL, axios} );
		console.info(this );
		this.url = url;
		this.router = router;
		this.axios = axios;
		this.cacheStdTTL = cacheStdTTL;
		this.cache = new NodeCache( defaultCacheConfig.stdTTL = cacheStdTTL );

		//this.createNewRoute();
		// this.measureServerResponseTime = this.measureExecutionTime();
		// this.measureAPICallResponseTime = this.measureExecutionTime();
	}

	responseSuccess( data ){
	/*	try {
			const jsonStr  = JSON.stringify(data),
          bData    = Buffer.from(jsonStr, 'utf-8');
		
		console.timeEnd( this.url );
		console.log("BROTLI RES");
        zlib.brotliCompress(bData, (err, result) => {
            console.log(result);
			this.res.set(200, {
                'Content-Type':     'application/json',
                'Content-Encoding': 'br',
                'Content-Length':   bData.length
            });
		
            !err ? this.res.end(result) : console.warn(err);
		});
	} catch (error) {
		console.warn(error);
	}*/
		//this.measureServerResponseTime.stop();
		return this.res.status( 200 ).json( data );
		
	}
}




class MeasureExecutionTime {
	constructor(){
		const NS_PER_SEC = 1e9;
		const NS_PER_MSEC = 1e6;
		let hrstart;
		const history = [];
	}

		 start(){
			hrstart = process.hrtime();
		};
		 stop (){
			const hrend = process.hrtime( hrstart ); // hrend[0] is in seconds, hrend[1] is in nanoseconds
			const timeInNanoSeconds = ( hrend[0] * NS_PER_SEC + hrend[1] ); // convert first to ns 
			const timeInMs = timeInNanoSeconds / NS_PER_MSEC;// then to ms
			addToHistory( timeInMs );
			return timeInMs;
		};

		 addToHistory = time => {
			history.unshift( time );
			if( history.length > 50 ) history.length = 50;
		};

		 average = ( array ) => {if ( array.length === 0 ) return 0; return array.reduce( ( a, b ) => a + b ) / array.length;};
	 getHistoricAverage = () => average( history );
		 getHistory = () => history.join( ' -- ' );
}
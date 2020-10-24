import process from 'process';
import NodeCache  from 'node-cache';
import { defaultCacheConfig } from './config/index.js';
// eslint-disable-next-line no-unused-vars
import { catFactsAxiosInstance, apiFootballInstance } from './loaders/axios.js';

export default class endPoint {
	constructor( { router, url, cacheStdTTL, axios = apiFootballInstance } ){
		console.info( 'new endPoint', url );
		this.url = url;
		this.router = router;
		this.axios = axios;
		this.cacheStdTTL = cacheStdTTL;
		this.cache = new NodeCache( defaultCacheConfig.stdTTL = cacheStdTTL );

		this.createNewRoute();
		this.measureServerResponseTime = this.measureExecutionTime();
		this.measureAPICallResponseTime = this.measureExecutionTime();
	}

	createNewRoute() {
		this.router.get( `${this.url}`, ( req, res ) => { 
			this.measureServerResponseTime.start();
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
		this.measureAPICallResponseTime.start();
		console.log( 'fetchFromApi', this.url, this.routerConfig.queryParams );
		this.axios.get( this.url, this.routerConfig.queryParams )
			.then( ( response ) => {
				console.log( 'fetchFromApi Took: ' + this.measureAPICallResponseTime.stop() );
				response.data.cacheDate = new Date().getTime();
				console.info( 'fetchFromApi response', this.url, response.status );
				this.cache.set( this.routerConfig.cacheKey, response.data, this.cacheStdTTL );
				
				this.responseSuccess( response.data );
				
			} )
			.catch( ( err )=>( this.res.status( 204 ).json( err ) ) );
	}

	getRouteConfig( req ) {
		if(req.query['clearCache']){
			this.cache.flushAll();
			this.responseSuccess( { result: 'CLEAR CACHE SUCCESS' } );
			console.info( 'CLEAR CACHE SUCCESS' );
			return;
		}
		const queryParams = {};
		console.log('getRouteConfig',req.query)
		queryParams['params'] = req.query ? req.query : {};

		return{
			queryParams,
			cacheKey: req.url
		};
	}
	measureExecutionTime(){
		const NS_PER_SEC = 1e9;
		const NS_PER_MSEC = 1e6;
		let hrstart;
		const history = [];
		const start = () => {
			hrstart = process.hrtime();
		};
		const stop = () => {
			const hrend = process.hrtime( hrstart ); // hrend[0] is in seconds, hrend[1] is in nanoseconds
			const timeInNanoSeconds = ( hrend[0] * NS_PER_SEC + hrend[1] ); // convert first to ns 
			const timeInMs = timeInNanoSeconds / NS_PER_MSEC;// then to ms
			addToHistory( timeInMs );
			return timeInMs;
		};

		const addToHistory = time => {
			history.unshift( time );
			if( history.length > 50 ) history.length = 50;
		};

		const average = ( array ) => {if ( array.length === 0 ) return 0; return array.reduce( ( a, b ) => a + b ) / array.length;};
		const getHistoricAverage = () => average( history );
		const getHistory = () => history.join( ' -- ' );

		return{
			start,
			stop,
			getHistoricAverage,
			getHistory
		};
	}
	responseSuccess( data ){
		console.timeEnd( this.url );
		this.measureServerResponseTime.stop();
		return this.res.status( 200 ).json( data );
		
	}
}

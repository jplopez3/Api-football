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
	}

	createNewRoute() {
		this.router.get( this.url, ( req, res ) => { 
			this.routerConfig = this.getRouteConfig( req );
			this.res = res;
			console.time( this.url );
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
		console.log( 'fetchFromApi', this.url, this.routerConfig.queryParams );
		this.axios.get( this.url, this.routerConfig.queryParams )
			.then( ( response )=>{
				console.info( 'fetchFromApi response', this.url, response.status );
				const data = response.data;
				this.cache.set( this.routerConfig.cacheKey, data, this.cacheStdTTL );
				this.responseSuccess( data );
			} )
			.catch( ( err )=>( this.res.status( 204 ).json( err ) ) );
	}

	getRouteConfig( req ) {
		const queryParams = {};
		queryParams['params'] = req.query ? req.query : {};

		return{
			queryParams,
			cacheKey: req.url
		};
	}

	responseSuccess( data ){
		console.timeEnd( this.url );
		this.res.status( 200 ).json( data );
      
	}
}

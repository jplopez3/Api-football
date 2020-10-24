import EndPoint from './DynamicRoute.js';
import { catFactsAxiosInstance } from './loaders/axios.js';

export default class Outscore {
	constructor( router ){
        
		const catFactsEndPoint = {
			url: '/facts/random',
			axios: catFactsAxiosInstance, 
			router: router,
			cacheStdTTL: '120',
		}; 
		const apiFootballEndPoint = { 
			url: '/fixtures',
			router: router,
			cacheStdTTL: '3600',
		};
		const apiFootballStatisticsEndPoint = {
			url: '/fixtures/statistics',
			router: router,
			cacheStdTTL: '3600',
		};
		this._endPoints = [ apiFootballEndPoint, apiFootballStatisticsEndPoint, catFactsEndPoint ];
		this._activeEndPoints = [];

		this.createEndpoints();
	}

	createEndpoints() {
		this._activeEndPoints = this._endPoints.map( ( endPointConfig )=>( new EndPoint( endPointConfig ) ) );

	}
	set endPoints( endpoint ) {
		this._endPoints.push( endpoint );
	}
	get endPoints() {
		return this._activeEndPoints.map( ( { cache, url, measureAPICallResponseTime, measureServerResponseTime } ) => ( {
			url: url,
			keys: cache.keys(),
			stats: cache.getStats(),
			ttl: cache.keys().map( ( key ) => { 
				const myObj = {};
				myObj[key] = new Date( cache.getTtl( key ) );
				return `${key} Expires in: ${new Date( cache.getTtl( key ) ).toLocaleTimeString( 'pt-PT' )}`;
			} ),
			responseTimes: {
				measureServerResponseTime,
				measureAPICallResponseTime
			}
		} ) );
	}
}

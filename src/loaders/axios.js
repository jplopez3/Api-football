import axios from 'axios';
import { catFactsAxios, apiFootballAxios } from '../config/index.js';

const catFactsAxiosInstance = axios.create( {
	...catFactsAxios,
	'method':'GET',
} );
const apiFootballInstance = axios.create( {
	...apiFootballAxios,
	'method':'GET',
} );
// Add a response interceptor
catFactsAxiosInstance.interceptors.response.use( onInterceptResponseSuccess, onInterceptResponseErrors );
apiFootballInstance.interceptors.response.use( onInterceptResponseSuccess, onInterceptResponseErrors );

// Add a request interceptor
catFactsAxiosInstance.interceptors.request.use( onInterceptRequestSuccess , onInterceptRequestErrors );
apiFootballInstance.interceptors.request.use( onInterceptRequestSuccess , onInterceptRequestErrors );

function onInterceptRequestSuccess( config ){
	// Do something before request is sent
	config.metadata = { startTime: new Date() };
	console.time( 'call duration: ' );
	console.info( 'Requesting data From',config.baseURL, config.params, config.headers['X-RapidAPI-Key'] );
	return config;
}
function onInterceptRequestErrors( error ){
	console.error( error );
	// Do something with request error
	return Promise.reject( error );
}

function onInterceptResponseSuccess( response ){
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	console.log( 'onInterceptResponseSuccess' );

	response.duration = new Date() - response.config.metadata.startTime;
	const errors = Object.keys( response.data.errors );

	if( errors.length > 0 ){
		console.error( 'errors in call: ' +response.data.errors );
		return Promise.reject( response.data.errors );
	}
	console.info( 'onInterceptResponseSuccess call duration: '+response.duration );	
	return response;
}
function onInterceptResponseErrors( error ){
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	console.log( 'onInterceptResponseErrors!!!' );
	if ( error.response ) {
		// client received an error response (5xx, 4xx)
		console.error( error.response );
	} else if ( error.request ) {
		// client never received a response, or request never left
		console.error( error.request );
	} else {
		// anything else
		console.error( error );
	}
	return Promise.reject( error );
}
export {
	catFactsAxiosInstance,
	apiFootballInstance
};
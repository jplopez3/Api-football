import Logger from '../winston.js';
import { performance } from 'perf_hooks';

export function onInterceptRequestSuccess(config) {
	// Do something before request is sent
	Logger.info('3 - Start Request to Football-api: %s', config.baseURL);
	Logger.debug('%s %O', config.headers['X-RapidAPI-Key'], config.params);
	//Todo move to a new performance module
	//time = performance.now();
	return config;
}
export function onInterceptRequestErrors(error) {
	// Do something with request error
	Logger.error('!onInterceptRequestErrors %O', error);
	return Promise.reject(error);
}

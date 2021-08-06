import { apiFootballInstance } from '../../loaders/axios/axios.js';
import Logger from '../winston.js';

export default async function Fetcher(url, queryParams) {
	try {
		const params = {};
		params['params'] = queryParams;
		Logger.info('3 - Fetch from Api URL: %s - queryParams: %O', url, params);
		const response = await apiFootballInstance.get(url, params);
		response.data.cacheDate = new Date().getTime();
		Logger.info('3 -  Fetch from Api %s response: %O', url, response.status);
		return response.data;
	} catch (error) {
		Logger.error('3 - Fetch from Api Catch %O', error);
		throw {
			type: 'rapidApi',
			error
		};
	}
}

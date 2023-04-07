import { apiFootballInstance } from '../loaders/axios/axios.js';
import Logger from '../loaders/winston.js';

export default class Fetcher {
	constructor(url) {
		this.url = url;
	}

	async get(queryParams) {
		try {
			const params = { params: cleanParams(queryParams) };

			Logger.info(
				'3 - Fetch from Api URL: %s - queryParams: %O',
				this.url,
				params
			);
			const response = await apiFootballInstance.get(this.url, params);
			response.data.cacheDate = new Date().getTime();
			Logger.info(
				'3 -  Fetch from Api %s response: %O',
				this.url,
				response.status
			);
			return response.data;
		} catch (error) {
			Logger.error('3 - Fetch from Api Catch %O', error);
			throw {
				type: 'rapidApi',
				error,
			};
		}
	}
}

function cleanParams(params) {
	const newObj = { ...params };
	if (params.hasOwnProperty('groupBy')) {
		delete newObj.groupBy;
	}
	return newObj;
}

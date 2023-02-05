import Logger from '../winston.js';

export function onInterceptResponseSuccess(response) {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	Logger.info('3- Request finished -Status: %s', response.status);
	Logger.debug('3- Request Response data: %O', response.data);

	const errors = Object.keys(response.data.errors);

	if (errors.length > 0) {
		Logger.error(
			'Request success but Errors in call: %O ',
			response.data.errors
		);
		return Promise.reject(response.data.errors);
	}
	//Todo: move to performance module
	// Logger.info(
	//   'onInterceptResponseSuccess call duration: ' +
	//     `${(performance.now() - time) / 1000} seconds`,
	// );
	return response;
}
export function onInterceptResponseErrors(error) {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	Logger.error('3- Request failed');
	if (error.response) {
		// client received an error response (5xx, 4xx)
		Logger.error('Response: %O', error.response);
	} else if (error.request) {
		// client never received a response, or request never left
		Logger.error('Request: %O', error.request);
	} else {
		// anything else
		Logger.error('Unknown error: %O', error);
	}
	const { status, statusText, type = 'rapidApi' } = error.response;
	return Promise.reject({ status, statusText, type });
}

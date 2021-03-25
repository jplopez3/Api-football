import axios from 'axios';
import { apiFootballAxios } from '../config/index.js';
import Logger from './winston.js';
import { performance } from 'perf_hooks';
let time;
const apiFootballInstance = axios.create({
  ...apiFootballAxios,
  method: 'GET',
});
// Add a response interceptor
apiFootballInstance.interceptors.response.use(
  onInterceptResponseSuccess,
  onInterceptResponseErrors,
);

// Add a request interceptor
apiFootballInstance.interceptors.request.use(
  onInterceptRequestSuccess,
  onInterceptRequestErrors,
);

function onInterceptRequestSuccess(config) {
  // Do something before request is sent
  Logger.info('Requesting data From Football-api: %s', config.baseURL);
  Logger.debug('%s %O', config.headers['X-RapidAPI-Key'], config.params);
  time = performance.now();
  return config;
}
function onInterceptRequestErrors(error) {
  // Do something with request error
  Logger.error('%O', error);
  return Promise.reject(error);
}
function onInterceptResponseSuccess(response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  Logger.info('Request success -Status: %s', response.status);
  Logger.debug('Response data: %O', response.data);

  const errors = Object.keys(response.data.errors);

  if (errors.length > 0) {
    Logger.error(
      'Request success but Errors in call: %O ',
      response.data.errors,
    );
    return Promise.reject(response.data.errors);
  }
  Logger.info(
    'onInterceptResponseSuccess call duration: ' +
      `${(performance.now() - time) / 1000} seconds`,
  );
  return response;
}
function onInterceptResponseErrors(error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  Logger.error('onInterceptResponseErrors!!!');
  if (error.response) {
    // client received an error response (5xx, 4xx)
    Logger.error('Response: %O', error.response);
  } else if (error.request) {
    // client never received a response, or request never left
    Logger.error('Request: %O', error.request);
  } else {
    // anything else
    Logger.error('Unknown error: %O', error.request);
  }
  return Promise.reject(error);
}
export { apiFootballInstance };

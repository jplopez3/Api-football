import axios from 'axios';
import { rapidApiFootballAxios } from '../../config/index.js';
import {
	onInterceptRequestSuccess,
	onInterceptRequestErrors,
} from './request.interceptor.js';
import {
	onInterceptResponseSuccess,
	onInterceptResponseErrors,
} from './response.interceptor.js';

const apiFootballInstance = axios.create({
	...rapidApiFootballAxios,
	method: 'GET',
});

// Add a response interceptor
apiFootballInstance.interceptors.response.use(
	onInterceptResponseSuccess,
	onInterceptResponseErrors
);

// Add a request interceptor
apiFootballInstance.interceptors.request.use(
	onInterceptRequestSuccess,
	onInterceptRequestErrors
);

export { apiFootballInstance };

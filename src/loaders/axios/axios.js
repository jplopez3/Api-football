import axios from 'axios';
import { apiFootballAxios } from '../../config/index.js';
import {
  onInterceptResponseSuccess,
  onInterceptResponseErrors,
  onInterceptRequestSuccess,
  onInterceptRequestErrors,
} from './index.js';

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

export { apiFootballInstance };

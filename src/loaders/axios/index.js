import {
  onInterceptRequestSuccess,
  onInterceptRequestErrors,
} from './request.interceptor.js';
import {
  onInterceptResponseSuccess,
  onInterceptResponseErrors,
} from './response.interceptor.js';
import { apiFootballInstance } from './axios.js';
import Fetcher from './fetcher.js';

export {
  onInterceptRequestSuccess,
  onInterceptRequestErrors,
  onInterceptResponseSuccess,
  onInterceptResponseErrors,
  apiFootballInstance,
  Fetcher,
};

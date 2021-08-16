const API_FOOTBALL_KEY = process.env.API_FOOTBALL_KEY;
const NODE_ENV = process.env.NODE_ENV || 'dev';
const LOG_TYPE = process.env.LOG_TYPE || 'info';
const apiPath = '/api/v3';

export { NODE_ENV, LOG_TYPE, API_FOOTBALL_KEY, apiPath };

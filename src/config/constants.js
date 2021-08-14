const RapidAPIKey = process.env.API_FOOTBALL_KEY;
const NODE_ENV = process.env.NODE_ENV || 'DEV';
const LOG_TYPE = process.env.LOG_TYPE || 'info';
const apiPath = '/api/v3';

export { NODE_ENV, LOG_TYPE, RapidAPIKey, apiPath };

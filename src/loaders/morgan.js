import morgan from 'morgan';
import Logger from './winston.js';

const logTypes = {
  combined: 'combined', // :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
  common: 'common', // :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]
  dev: 'dev', // :method :url :status :response-time ms - :res[content-length]
  tiny: 'tiny', //:method :url :status :res[content-length] - :response-time ms
  other:
    ':remote-addr :method :url :status :res[content-length] - :response-time ms :total-time[digits]',
};

const getLogType = () => {
  const logType = process.env.LOG_TYPE;
  return !!logTypes[logType] ? logTypes[logType] : 'dev';
};

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
const stream = {
  // Use the http log level from winston
  write: (message) => Logger.http(message.trim()),
};

// Skip all the Morgan http log if the
// application is not running in development mode.
//Todo: is necessary?
const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return false; //env !== 'development';
};
//logs on request instead of response
const immediate = false;
// Build the morgan middleware
const morganMiddleware = morgan(
  // Define message format string (this is the default one).
  // The message format is made from tokens, and each token is
  // defined inside the Morgan library.
  // You can create your custom token to show what do you want from a request.
  getLogType(),
  // Options: in this case, I overwrote the stream and the skip logic.
  // See the methods above.
  { stream, skip, immediate },
);

export default morganMiddleware;

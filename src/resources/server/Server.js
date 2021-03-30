import { server } from '../../loaders/express.js';
import Logger from '../../loaders/winston.js';
const PORT = process.env.PORT || 5000;

export default () => {
  try {
    server.listen(PORT, () => {
      Logger.warn('Server Listening on port: %s', PORT);
    });
  } catch (error) {
    Logger.error('Error at server start: %0', error);
  }
};

import EndPoint from './DynamicEndpoint.js';
import Logger from '../loaders/winston.js';
import { endPoints, apiPath } from '../config/outscore.js';
export default class Outscore {
  constructor(server) {
    Logger.warn('Starting Outscore');
    this.server = server;
    this._endPoints = endPoints;
    this._activeEndPoints = [];
    this.createEndpoints();
  }

  createEndpoints() {
    Logger.warn('Initializing endpoints in %s', apiPath);
    this._activeEndPoints = this._endPoints.map((endPointConfig) => {
      const endPoint = new EndPoint(endPointConfig);
      this.server.use(apiPath, endPoint.router);
      return endPoint;
    });
  }
  set endPoints(endpoint) {
    this._endPoints.push(endpoint);
  }
  //Todo:refactor endpoint info and status
  get endPoints() {
    return this._activeEndPoints.map(
      ({
        cache,
        url,
        measureAPICallResponseTime,
        measureServerResponseTime,
      }) => ({
        url: url,
        keys: cache.keys(),
        stats: cache.getStats(),
        ttl: cache.keys().map((key) => {
          const myObj = {};
          myObj[key] = new Date(cache.getTtl(key));
          return `${key} Expires in: ${new Date(
            cache.getTtl(key),
          ).toLocaleTimeString('pt-PT')}`;
        }),
        responseTimes: {
          measureServerResponseTime,
          measureAPICallResponseTime,
        },
      }),
    );
  }
}

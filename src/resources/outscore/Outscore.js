import express from 'express';
import EndPoint from '../DynamicEndpoint.js';
import Logger from '../../loaders/winston.js';
import { endPoints, apiPath } from '../../config/outscore.js';
class Outscore {
  constructor() {
    Logger.warn('Starting Outscore');
    try {
      this._router = express.Router();
      this._endPoints = endPoints;
      this._activeEndPoints = [];
      this.createEndpoints();
    } catch (error) {
      Logger.error('Error Starting Outscore: %O', error);
    }
  }

  createEndpoints() {
    Logger.warn('Initializing endpoints in %s', apiPath);

    this._activeEndPoints = this._endPoints.map((endPointConfig) => {
      const endPoint = new EndPoint(endPointConfig);
      this._router.use(apiPath, endPoint.router);
      return endPoint;
    });
  }
  set endPoints(endpoint) {
    this._endPoints.push(endpoint);
  }
  //Todo:refactor endpoint info and status
  get endPoints() {
    return this._activeEndPoints;
  }

  get router() {
    return this._router;
  }
}

export default new Outscore();

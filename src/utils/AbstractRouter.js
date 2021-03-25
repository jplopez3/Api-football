import express from 'express';
import Logger from '../loaders/winston.js';
export default class AbstractRouter {
  constructor(path) {
    this.router = express.Router();
    this.initialize(path);
  }
  runService(req, res) {
    Logger.warn('runService Method for ' + this.path + 'does not exist !');
  }
  initialize(path) {
    this.path = path;
    Logger.info('Initializing: ' + this.path);

    this.router.get(`${this.path}`, this.runService.bind(this));
  }
}

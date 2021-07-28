import { Router } from 'express';
import betshelperController from './betshelper.controller.js';

const betshelper = Router();
// /betshelper
betshelper.get('/', betshelperController);

export default betshelper;

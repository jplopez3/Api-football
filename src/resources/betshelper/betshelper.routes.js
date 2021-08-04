import { Router } from 'express';
import betshelperController from './betshelper.controller.js';
import validateRequest from '../../utils/middlewares/validateRequest.js';

const requiredFields = ['home', 'away'];
const betshelper = Router();
// /betshelper
betshelper.use(validateRequest(requiredFields));
betshelper.get('/', betshelperController);

export default betshelper;

import betsHelperService from '../../services/betsHelper/BetsHelper.service.js';
import Logger from '../../loaders/winston.js';

export default async (req, res, next) => {
	try {
		const { home, away } = req.query;
		const result = await betsHelperService.get({ home, away });

		res.status(200).json(result);
	} catch (error) {
		Logger.error('Betshelper.controller.js  %O', error);
		next(error);
	}
};

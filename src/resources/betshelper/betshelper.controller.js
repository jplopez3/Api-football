import betsHelperService from '../../services/betsHelper/BetsHelper.service.js';
import Logger from '../../loaders/winston.js';

export default async (req, res, next) => {
	try {
		const { home, away } = req.query;
		const result = await betsHelperService.get({ home, away });

		const response = mapResponse(result);

		res.status(200).json(response);
	} catch (error) {
		Logger.error('Betshelper.controller.js  %O', error);
		next(error);
	}
};

const mapResponse = ({ homeFixtures, awayFixtures, h2hFixtures }) => {
	return {
		home: homeFixtures,
		away: awayFixtures,
		h2h: h2hFixtures,
	};
};

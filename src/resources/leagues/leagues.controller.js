import groupLeagues from '../../utils/group_by_country/groupLeagues.js';
import Logger from '../../loaders/winston.js';

export default async (req, res, next) => {
	try {
		const response = groupLeagues(res.locals.cachedData);
		res.status(200).json(response);
	} catch (error) {
		Logger.error('leagues.controller.js  %O', error);
		next(error);
	}
};

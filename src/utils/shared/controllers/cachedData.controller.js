export default async (req, res) => {
	res.status(200).json(res.locals.cachedData);
};

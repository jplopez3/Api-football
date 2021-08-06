export default (req, res) => {
	res.status(200).json(res.locals.cachedData);
};

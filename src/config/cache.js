const defaultCacheConfig = () => ({
	stdTTL: 120,
	checkperiod: 60,
	deleteOnExpire: true,
	maxKeys: -1,
});

export default defaultCacheConfig;

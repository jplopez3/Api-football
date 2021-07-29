const defaultCacheConfig = () => ({
  stdTTL: 60,
  checkperiod: 60,
  deleteOnExpire: true,
  maxKeys: 100,
});

export default defaultCacheConfig;

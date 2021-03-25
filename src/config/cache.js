const defaultCacheConfig = () => ({
  stdTTL: 15,
  checkperiod: 20,
  deleteOnExpire: true,
  maxKeys: 100,
});

export default defaultCacheConfig;

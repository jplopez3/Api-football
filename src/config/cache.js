const defaultCacheConfig = () => ({
  stdTTL: 60,
  checkperiod: 60,
  deleteOnExpire: true,
  maxKeys: -1,
});

export default defaultCacheConfig;

import Cache from './Cache.repository.js';
export default (() => {
	const cachesCollection = new Map();

	const hasCache = (cachePath) => {
		return cachesCollection.has(cachePath);
	};

	const create = (cachePath) => {
		if (!hasCache(cachePath)) {
			const cache = new Cache(cachePath);
			cachesCollection.set(cachePath, cache);
			return cache;
		}

		return get(cachePath);
	};

	const getAll = () => {
		return cachesCollection.entries();
	};

	const get = (cachePath) => {
		return cachesCollection.get(cachePath);
	};

	return {
		create,
		get,
		getAll,
		hasCache,
	};
})();

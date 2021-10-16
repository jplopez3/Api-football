/** DB config */
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const CLUSTER_NAME = process.env.CLUSTER_NAME;
const DB_NAME = 'outscore';
const COLLECTIONS = {
	fixtures: 'fixtures',
};

export { DB_USERNAME, DB_PASSWORD, CLUSTER_NAME, DB_NAME, COLLECTIONS };

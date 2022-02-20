import { MongoClient } from 'mongodb';
import {
	DB_USERNAME,
	DB_PASSWORD,
	CLUSTER_NAME,
	DB_NAME,
} from '../config/database.js';
import logger from './winston.js';

class Database {
	constructor() {
		this.dbName = DB_NAME;
	}
	async connect() {
		if (this.dbClient) {
			logger.warn('Database connection already exists');
			return;
		}
		const TWO_MINUTES_IN_MS = 2 * 60 * 1000;
		const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
		const uri = this.getConnectionString();

		logger.debug(`Database connection string: ${uri}`);

		try {
			const client = new MongoClient(uri, {
				//poolSize: 50,
				connectTimeoutMS: TWO_MINUTES_IN_MS,
				socketTimeoutMS: ONE_DAY_IN_MS,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});

			this.dbClient = await client.connect();
			logger.info('Connected with database host');
			this.databaseInstance = this.dbClient.db(this.dbName);
		} catch (error) {
			logger.error('Error connecting to database', error);
		}
	}

	getConnectionString() {
		return `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.u38za.mongodb.net/${CLUSTER_NAME}?retryWrites=true&w=majority`;
	}

	getCollection(name) {
		if (!this.databaseInstance) {
			throw new Error('Database not initialized');
		}

		return this.databaseInstance.collection(name);
	}

	async disconnect() {
		if (this.dbClient.isConnected()) {
			logger.info(`Disconnected from ${this.host}/${this.dbName}`);
			await this.dbClient.close();
		}
	}
}

export default Database;

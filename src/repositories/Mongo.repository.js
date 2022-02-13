import { ObjectId } from 'mongodb';
import db from '../loaders/database.js';

export default class repository {
	constructor(collectionName) {
		this.collectionName = collectionName;
	}
	async init() {
		await db.connect();
		this.collection = db.getCollection(this.collectionName);
	}

	async updateOne(filter, data, expiration = null) {
		//setOnInsert only applied to new documents
		//$set updates any found document
		const update = {
			$set: {
				...(expiration && { expireAt: expiration }),
				...data,
			},
		};
		try {
			await this.collection.updateOne(filter, update, { upsert: true });
		} catch (error) {
			console.log(error);
		}
	}

	async findOne(filter) {
		const removeId = { projection: { _id: false } };
		const result = await this.collection.findOne(filter, removeId);

		return result;
	}

	getCollection() {
		return this.collection;
	}
}

export function getValidObjectId(id) {
	if (!ObjectId.isValid(id)) {
		//todo: new error type
		throw new Error('Invalid ID');
	}

	if (typeof id === 'string') {
		id = new ObjectId(id);
	}

	return id;
}

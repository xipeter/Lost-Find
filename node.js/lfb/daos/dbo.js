const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const assert = require('assert');
//const url = 'mongodb://192.168.75.130:27017/test';
const url = 'mongodb://root:123456%23@cluster0-shard-00-00-kkvhg.mongodb.net:27017,cluster0-shard-00-01-kkvhg.mongodb.net:27017,cluster0-shard-00-02-kkvhg.mongodb.net:27017/lfb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

module.exports.getdb = async function() {
	 try {
		const db = await MongoClient.connect(url);
		return db;
	 } catch (err) {
		console.log(err.message);
	 }
};


module.exports.execute = async function(execfun, callback)
{
	try{
		const db = await this.getdb();
		   //const result = await db.collection('name').find({}).toArray();
		const result = await execfun(db);
		db.close();
		if(callback) callback(result);
	}
	catch(e)
	{
		console.log(e);
	}
}

module.exports.isValidObjectId = (s) => ObjectId.isValid(s);

module.exports.safeObjectId = (s) => ObjectId.isValid(s) ? new ObjectId(s) : null;

//doCrud().then(() => { console.log("CRUD test completed.") });
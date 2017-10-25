'use strict';
const dbo = require("./dbo");
//const uuidv5 = require('uuid/v5');
var user = require("../models/user.js");
var {ObjectId} = require('mongodb'); 




var userDAO = function () {
	var counter=0;
	const tableName = "users";
	
    this.getUsers =  async function (callback) {
		dbo.execute(db=>{return db.collection(tableName).find({}).toArray();},callback);
    }

	this.getUserByEmailAndPwd = function (email,pwd,callback) {
		dbo.execute(db=>{return db.collection(tableName).findOne({email:email,password:pwd});},callback);
    }
	
	this.getAllPostsByUId = function(type,uid, callback){
		var condition={"posts.type":type};
	
		if(uid)
		{
			if(!dbo.isValidObjectId(uid))
			{
				callback({});
				return;
			} 
			condition._id = dbo.safeObjectId(uid);
		}
		
		dbo.execute(db=>{return db.collection(tableName)
		.aggregate(
				[{"$unwind":"$posts"},{"$match":{"posts.type":parseInt(type)}},{"$project":{"posts":1,"_id":0}}],
				(err, result)=>{callback(result);}
			);
		},null);
	}
	
	this.getAllPosts = function(type, callback){
		var condition={"posts.type":type};
		dbo.execute(db=>{return db.collection(tableName)
		.aggregate(
				[{"$unwind":"$posts"},{"$match":{"posts.type":parseInt(type)}}],
				(err, result)=>{callback(result);}
			);
		},null);
	}
	
	
	
}

module.exports= userDAO;
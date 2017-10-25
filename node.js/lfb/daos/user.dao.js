'use strict';
const dbo = require("./dbo");
//const uuidv5 = require('uuid/v5');
var user = require("../models/user.js");
var {ObjectId} = require('mongodb'); 




var userDAO = function () {
	var counter=0;
	const tableName = "users";
	
	
//-----------------------user operations---------------------------------
	
    this.getUsers =  async function (callback) {
		dbo.execute(db=>{return db.collection(tableName).find({}).toArray();},callback);
    }

	this.getUserByEmailAndPwd = function (email,pwd,callback) {
		dbo.execute(db=>{return db.collection(tableName).findOne({email:email,password:pwd},{posts:0});},callback);
    }
	
	this.getUserByEmail =function(email, callback){
		dbo.execute(db=>{return db.collection(tableName).findOne({email:email},{posts:0});},callback);
	}
	
	this.addUser = function(user,callback)
	{
		if(!user){callback({});return;}
		dbo.execute(db=>{return db.collection(tableName).insertOne(user)},callback);
	}
	

	
	
	
	
	
	
	
	
	
	
	
//-----------------------post operations---------------------------------

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
	
	this.getPost = function(id, callback)
	{
		if(!id) {callback({});return;}
		dbo.execute(db=>{return db.collection(tableName).findOne({uuid:id})},callback);
	}
	
	
	this.addPost = function(email, post, callback)
	{
/*
db.users.update({"email":"baoxianjian@gmail.com"},{$addToSet:{posts:{
			title:'xxx0', type:0, status:0 , key_time:123456789, location:'Student Lounge of MUM', desc:'red pen', pubat:123456789, 
			comments:[{u_id:'xxxxxxxxxx',comment:'xxx', pubat:122345667}]
		}
	}
});
*/		post.uuid = dbo.getUUID();
		
		dbo.execute(db=>{return db.collection(tableName).findOneAndUpdate({email:email},{$addToSet:{posts:post}});},callback);
		

	
	}
	
	
	
	
}

module.exports= userDAO;
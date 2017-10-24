'use strict';
const dbo = require("./dbo");

var user = require("../models/user.js");


var userDAO = function () {
	var counter=0;
	const tableName = "users";
	
    this.getUsers =  async function (callback) {
		dbo.execute(db=>{return db.collection(tableName).find({}).toArray();},callback);
    }

	this.getUserByEmailAndPwd = function (email,pwd,callback) {
		dbo.execute(db=>{return db.collection(tableName).findOne({email:email,password:pwd});},callback);
        //return userList.filter(a=>{return a.id==id}).pop();
    }
	
	
}

module.exports= userDAO;
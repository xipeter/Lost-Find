const express = require('express');
var router = express.Router();

const model = require('../models/user');

var userDAO=require('../daos/user.dao');
var dao = new userDAO();


/* GET users listing. */
router.get('/', function(req, res, next) {
	dao.getUsers(a=>{res.send(a)});
});


/* GET user by email */
router.get('/:email', function(req, res, next) {
	const email = req.params.email;
	dao.getUserByEmail(email,a=>{res.send(a)}); 
});





/* POST check user. */
router.post('/check', function(req, res, next) {
	var body = req.body;
	
	dao.getUserByEmailAndPwd(body.email,body.pwd,a=>{
		if(a) 
			res.send({status:1});
		else 
			res.send({status:0});
		}); //mongo db
});


/* POST add user. */
router.post('/', function(req, res, next) {	  
	var body = req.body;
	//function(uuid,title,pic,type,status,key_time,location,desc,pubat)
	//function (fn,ln,pwd,email)
	var user = new model.user(body.fn, body.ln, body.pwd, body.email);
	dao.addUser(user,a=>{res.send(a)});
});





/* GET users' posts. */
router.get('/:uid/posts/:type', function(req, res, next) {
	const uid = req.params.uid;
	const type = req.params.type;
	dao.getAllPostsByUId(type,uid,a=>{console.log(a);res.send(a)}); //mongo db
});


/* GET posts by type */
router.get('/posts/:type', function(req, res, next) {
	const type = req.params.type;
	dao.getAllPosts(type,a=>{console.log(a);res.send(a)}); //mongo db
});


/* GET post by uuid */
router.get('/posts/:id', function(req, res, next) {
	const id = req.params.id;
	dao.getPost(id,a=>{console.log(a);res.send(a)}); //mongo db
});










/* PUT user. */
router.put('/:id', function(req, res, next) {  
	var id = req.params.id;
	var body = req.body;
	var user = dao.newUser(body.name, body.author, body.isbn);
	
	dao.updateUser(id,user,a=>res.send(a)) ;
		
	//var updatedUser = dao.updateUser(id,user);
	//res.send(updatedUser);
});


/* DELETE user. */
router.delete('/:id', function(req, res, next) {  
	var id = req.params.id;
	
	dao.deleteUser(id,a=>res.send(a));
	//var deletedUser = dao.deleteUser(id);
	//res.send(deletedUser);
});


module.exports = router;

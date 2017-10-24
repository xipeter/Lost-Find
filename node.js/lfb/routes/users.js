const express = require('express');
var router = express.Router();
var userDAO = require('../daos/user.dao');
var dao = new userDAO();
//var userDAO = new userApi.userDAO;


/* GET users listing. */
router.get('/', function(req, res, next) {	
	dao.getUsers(a=>{res.send(a)}); //mongo db
});


/* GET user one. */
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	
	dao.getUser(id,a=>{res.send(a)}); //mongo db
	
	//var user = dao.getUser(id);
	//res.send(user);
});


/* POST user one. */
router.post('/check', function(req, res, next) {
	var body = req.body;
	
	dao.getUserByEmailAndPwd(body.email,body.pwd,a=>{
		//res.send(a);
		if(a) 
			res.send({status:1});
		else 
			res.send({status:0});
		}); //mongo db
	
	//var user = dao.getUser(id);
	//res.send(user);
});



/* POST user. */
router.post('/', function(req, res, next) {	  
	var body = req.body;
	var user = dao.newUser(body.name, body.author, body.isbn);
	
	dao.addUser(user,a=>{res.send(a)});
	
	//dao.addUser(user);
	//res.send(user);
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

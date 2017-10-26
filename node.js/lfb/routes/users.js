const express = require('express');
var router = express.Router();

const model = require('../models/user');

var userDAO=require('../daos/user.dao');
var dao = new userDAO();


//----------------------------users api---------------------------------

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
	var user = new model.user(body.fn, body.ln, body.pwd, body.email, new Date().getTime());
	dao.getUserByEmail(body.email,a=>{
		if(a){res.send({status:0}); return;}
		dao.addUser(user,a=>{res.send({status:a.result.n})});
	});
});


//----------------------------posts api---------------------------------




/* GET users' posts. */
router.get('/:uid/posts/:type', function(req, res, next) {
	const uid = req.params.uid;
	const type = req.params.type;
	dao.getAllPostsByUId(type,uid,a=>{res.send(a)}); //mongo db
});


/* GET posts all */
router.get('/posts/all', function(req, res, next) {
	dao.getAllPosts(a=>{res.send(a)}); //mongo db
});




/* GET posts by type */
router.get('/posts/type/:type', function(req, res, next) {
	const type = req.params.type;
	dao.getAllPostsByType(type,a=>{res.send(a)}); //mongo db
});

/* GET posts by status */
router.get('/posts/status/:sta', function(req, res, next) {
	const sta = req.params.sta;
	dao.getAllPostsByStatus(sta,a=>{res.send(a)}); //mongo db
});


/* GET post by uuid */
router.get('/posts/:id', function(req, res, next) {
	const id = req.params.id;
	dao.getPost(id,a=>{res.send(a)}); //mongo db
});


/* POST add post. */
router.post('/posts', function(req, res, next) {	  
	var body = req.body;
	//function(uuid,title,pic,type,status,key_time,location,desc,pubat)
	//function (fn,ln,pwd,email)
	//var user = new model.post(body.fn, body.ln, body.pwd, body.email);
	
	//function(title,pic,type,status,key_time,location,desc,pubat)
	var post = new model.post(body.title,'',body.type,0, body.key_time, body.location, body.desc,new Date().getTime());
	
	dao.addPost(body.email,post,a=>{res.send({status:a.result.n})});
});



//----------------------------comments api---------------------------------

/* GET comments listing. */
router.get('/posts/:pid/comments', function(req, res, next) {
	const pid = req.params.pid;
	dao.getAllCommentsByPostId(pid,a=>{ res.send(a)});
});


/* POST add comments. */
router.post('/posts/:pid/comments', function(req, res, next) {	  
	const pid = req.params.pid;
	const body = req.body;
	//function(u_id,p_uuid, comment, pubat)
	
	var comment = new model.comment(body.email,pid,body.comment,new Date().getTime());
	dao.addComment(comment,a=>{res.send({status:a.result.n})});
});



/* PUT/POST change status of posts. */
router.post('/posts/:id', function(req, res, next) {  
	var id = req.params.id;
	var body = req.body;
	
	dao.updatePostById(id,body.status,a=>res.send({status:a.result.n})) ;
});


module.exports = router;

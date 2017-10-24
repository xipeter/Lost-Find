const express = require('express');
var router = express.Router();
var bookDAO = require('../daos/book.dao');
var dao = new bookDAO();
//var bookDAO = new bookApi.bookDAO;

	dao.addBook(dao.newBook('a', 'b', 'c'),()=>{});
	dao.addBook(dao.newBook('d', 'e', 'f'),()=>{});
	dao.addBook(dao.newBook('h', 'i', 'j'),()=>{});


/* GET books listing. */
router.get('/', function(req, res, next) {	
	dao.getBooks(a=>{res.send(a)}); //mongo db
});


/* GET book one. */
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	
	dao.getBook(id,a=>{res.send(a)}); //mongo db
	
	//var book = dao.getBook(id);
	//res.send(book);
});


/* POST book. */
router.post('/', function(req, res, next) {	  
	var body = req.body;
	var book = dao.newBook(body.name, body.author, body.isbn);
	
	dao.addBook(book,a=>{res.send(a)});
	
	//dao.addBook(book);
	//res.send(book);
});


/* PUT book. */
router.put('/:id', function(req, res, next) {  
	var id = req.params.id;
	var body = req.body;
	var book = dao.newBook(body.name, body.author, body.isbn);
	
	dao.updateBook(id,book,a=>res.send(a)) ;
		
	//var updatedBook = dao.updateBook(id,book);
	//res.send(updatedBook);
});


/* DELETE book. */
router.delete('/:id', function(req, res, next) {  
	var id = req.params.id;
	
	dao.deleteBook(id,a=>res.send(a));
	//var deletedBook = dao.deleteBook(id);
	//res.send(deletedBook);
});


module.exports = router;

'use strict';
const dbo = require("./dbo");

var book = require("../models/book.js");


var bookDAO = function () {
    //var bookList = [];
	var counter=0;
	const tableName = "books";
	

	
    this.newBook = function (name, author, isbn) {
        return new book(name,author,isbn);
    }

    this.getBooks =  async function (callback) {
		dbo.execute(db=>{return db.collection(tableName).find({}).toArray();},callback);
    }

	this.getBook = function (id,callback) {
		dbo.execute(db=>{return db.collection(tableName).findOne({id:id});},callback);
        //return bookList.filter(a=>{return a.id==id}).pop();
    }

    this.addBook = function (book,callback) {
		book.id = counter++;
		dbo.execute(db=>{return db.collection(tableName).insertOne(book);},callback);
        //bookList.push(book);
    }

    this.deleteBook = function (id,callback) {
        dbo.execute(db=>{return db.collection(tableName).findOneAndDelete({id:id});},callback);
    }
 
    this.updateBook = function (id,newBook,callback)
    {
		newBook.id=id;
		dbo.execute(db=>{return db.collection(tableName).findOneAndUpdate({id:id},{$set: newBook});},callback);
		/*
       bookList = bookList.map(a => {return a.id == id? newBook : a});
	   return bookList.filter(a=>{return a.id==id}).pop();
	   */
    }
}


//console.log(new book().getOneBook());

//var dao = new bookDAO();

/*
dao.addBook(dao.newBook('a', 'b', 'c'));
dao.addBook(dao.newBook('d', 'e', 'f'));
dao.addBook(dao.newBook('h', 'i', 'j'));

console.log(dao.getBooks());
console.log(dao.deleteBook("1"));
console.log(dao.getBooks());
dao.updateBook(0,dao.newBook('h', 'i', 'j'));
console.log(dao.getBooks());
*/

//module.exports.book = book;
module.exports= bookDAO;
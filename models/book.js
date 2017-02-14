var mongoose = require("mongoose");

var bookSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String
    },
    pages:{
        type: String
    },
    image_url:{
        type: String
    },
    buy_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
})

var Book = mongoose.model("Book", bookSchema);
Book.getBooks  = function(callback, limit){
    Book.find(callback).limit(limit);
}
Book.getBookById = function(id, callback){
    Book.findById(id, callback);
}
Book.addBook = function(book, callback){
    Book.create(book, callback);
}

Genre.updateBook = function(id, book, options, callback)
{
    var query = {_id:id};
    var update = {
        name : book.name,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url,
        create_date: book.create_date
    }

    console.log(update);
    Book.findOneAndUpdate(query, update, options, callback);
}

Book.DeleteBook = function(id, callback){
    var query = {_id:id};
    Book.remove(query, callback);
}

module.exports = Book;
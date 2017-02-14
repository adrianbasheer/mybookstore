var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require('path');

app.use(express.static(path.join(__dirname,"client")));
app.use(bodyParser.json());

Genre = require("./models/genre");
Book = require("./models/book");

mongoose.connect("mongodb://localhost/bookstore");
var db = mongoose.connection;
app.get("/", function(req, res){
    res.send("Hello World!");
});

app.get("/api/genres", function(req, res){
    Genre.getGenres(function(err, genres){
        if (err){
            throw err;
        }
        res.json(genres);
    })
});

app.post("/api/genres", function(req, res){
    console.log("Received post request");
    var genre = req.body;
    console.log("calling addGenre");
    Genre.addGenre(genre, function(err, genre){
        if (err){
            console.log(err);
            throw err;
        }
        res.json(genre);
        console.log("callback success!");
    })
});

app.delete("/api/genres/:_id", function(req, res){
    var id = req.params._id;
    Genre.DeleteGenre(id, function(err, genre){
        if (err){
            console.log(err);
            throw err;
        }
        res.json(genre);
    })
});

app.delete("/api/books/:_id", function(req, res){
    var id = req.params._id;
    Book.DeleteBook(id, function(err, book){
        if (err){
            console.log(err);
            throw err;
        }
        res.json(book);
    })
});

app.put("/api/genres/:_id", function(req, res){
    var id = req.params._id;
    var genre = req.body;
    console.log("calling addGenre");
    Genre.updateGenre(id, genre, {}, function(err, genre){
        if (err){
            console.log(err);
            throw err;
        }
        res.json(genre);
        console.log("callback success!");
    })
});


app.put("/api/books/:_id", function(req, res){
    var id = req.params._id;
    var book = req.body;
    console.log("calling updateBook");
    Genre.updateBook(id, book, {}, function(err, genre){
        if (err){
            console.log(err);
            throw err;
        }
        res.json(book);
        console.log("callback success!");
    })
});

app.get("/api/books", function(req, res){
    Book.getBooks(function(err, books){
        if (err){
            throw err;
        }
        res.json(books);
    })
});

app.post("/api/books", function(req, res){
    console.log("Received post request");
    var book = req.body;
    console.log("calling addGenre");
    Book.addBook(book, function(err, book){
        if (err){
            throw err;
        }
        console.log("callback success!");
        res.json(book);
    })
});

app.get("/api/books/:_id", function(req, res){
    Book.getBookById(req.params._id, errorHandler((book) => res.json(book)));
});

app.listen(3000);
console.log("Running on port 3000...");

function handleError(err)
{
    console.error(err);
    throw err;
}

function errorHandler(callback){
    return function(err, result){
        if (err){
           handleError(err);
        }
        else{
            callback(result);
        }
    }
}
//37:27

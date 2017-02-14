var mongoose = require("mongoose");

var genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
})

var Genre = mongoose.model("Genre", genreSchema);
Genre.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}

Genre.addGenre = function(genre, callback){
    Genre.create(genre, callback);
}

Genre.updateGenre = function(id, genre, options, callback)
{
    var query = {_id:id};
    var update = {
        name : genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

Genre.DeleteGenre = function(id, callback){
    var query = {_id:id};
    Genre.remove(query, callback);
}

module.exports = Genre;
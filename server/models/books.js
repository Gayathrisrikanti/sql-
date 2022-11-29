// File name:route.js
 //Student’s Name:Gayatrhi Srikanti 
 //StudentID: 301181090
 //Date: 06-Oct-2022
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    BookID: String,
    Title: String,
    Description: String,
    Price: Number,
    Author: String
    
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);

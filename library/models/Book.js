const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	description: String,
	author: String,
	rating: Number
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
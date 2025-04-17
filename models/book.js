const mongoose = require('mongoose');
const reviewSchema = require('./review');

const bookSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviews: [reviewSchema]
});

module.exports = mongoose.model('Book', bookSchema);

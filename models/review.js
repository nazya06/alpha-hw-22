const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewerName: String,
  rating: Number,
  comment: String
});

module.exports = reviewSchema;

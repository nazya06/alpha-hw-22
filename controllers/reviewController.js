const Book = require('../models/book');

exports.addReview = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) throw new Error('Book not found');

    book.reviews.push(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) throw new Error('Book not found');

    book.reviews.id(req.params.reviewId).remove();
    await book.save();
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

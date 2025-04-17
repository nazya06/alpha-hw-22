const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');


router.post('/:bookId', reviewController.addReview);


router.delete('/:bookId/:reviewId', reviewController.deleteReview);

module.exports = router;

const express = require('express');

const router = express.Router();
const Book = require('../models/Book.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/books', (req, res, next) => {
  Book.find()
    .then((results) => {
      res.render('books', { books: results, msg: req.query.msg });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/books/edit', (req, res, next) => {
  const bookId = req.query.book_id;
  Book.findOne({ _id: bookId })
    .then((result) => {
      res.render('book-edit', { book: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.post('/books/edit', (req, res, next) => {
  const bookId = req.query.book_id;
  Book.findByIdAndUpdate(bookId, { $set: req.body })
    .then(() => {
      res.redirect('/books');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/book/:bookId', (req, res, next) => {
  Book.findOne({ _id: req.params.bookId })
    .then((result) => {
      res.render('book', { book: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/books/add', (req, res, next) => {
  res.render('book-add');
});

router.post('/books/add', (req, res, next) => {
  const { title, author, description, rating } = req.body;
  const newBook = new Book({ title, author, description, rating });
  newBook.save()
    .then(() => {
      res.redirect('/books');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/book/del/:bookId', (req, res, next) => {
  Book.findByIdAndDelete(req.params.bookId)
    .then(() => {
      res.redirect('/books/?msg=Book+Removed');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

module.exports = router;

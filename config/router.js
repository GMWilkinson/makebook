const router = require('express').Router();
const books = require('../controllers/books');
const users = require('../controllers/users');
const auth = require('../controllers/auth');

router.route('/books')
  .get(books.index)
  .post(books.create);

router.route('/books/:bookId')
  .get(books.show)
  .put(books.update);

router.route('/users')
  .get(users.index);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/books/:bookId/pages/:pageId/options')
  .put(books.edit)
  .post(books.create);

module.exports = router;
// Create a page option:
// POST /books/:bookId/pages/:pageId/options
// Edit one:
// PUT /books/:bookId/pages/:pageId/options/:optionId

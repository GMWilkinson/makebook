const router = require('express').Router();
const books = require('../controllers/books');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const pages = require('../controllers/pages');
const secureRoute = require('../lib/secureRoute');

router.route('/books')
  .get(books.index)
  .post(books.create);

router.route('/books/:id')
  .get(books.show);
// .put(books.update);

router.route('/users')
  .get(users.index);

router.post('/register', secureRoute, auth.register);
router.post('/login', auth.login);

router.route('/books/:bookId/pages')
  .get(pages.index)
  .post(pages.create);

router.route('/books/:bookId/pages/first')
  .get(pages.first)
  .post(pages.create);

router.route('/books/:bookId/pages/:pageId/options')
  .get(pages.page)
  .post(pages.create);

router.route('/books/:bookId/pages/:pageId')
  .get(pages.show)
  .post(pages.create);

// router.route('/books/:bookId/pages/:pageId/options')
//   // .put(books.edit)
//   .get(pages.show)
//   .post(pages.create);

module.exports = router;
// Create a page option:
// POST /books/:bookId/pages/:pageId/options
// Edit one:
// PUT /books/:bookId/pages/:pageId/options/:optionId
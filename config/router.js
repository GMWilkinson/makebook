const router = require('express').Router();
const books = require('../controllers/books');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const pages = require('../controllers/pages');
// const secureRoute = require('../lib/secureRoute');

router.route('/books')
  .get(books.index)
  .post(books.create);

router.route('/new/writing')
  .get(books.creatingIndex)
  .delete(books.delete)
  .post(books.create);

router.route('/books/:id')
  .get(books.show)
  .delete(books.delete);

router.route('/users')
  .get(users.index);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/books/:bookId/pages')
  .get(pages.index)
  .post(pages.create)
  .delete(pages.delete);

router.route('/books/:bookId/pages/first')
  .get(pages.first)
  .post(pages.create);


router.route('/books/:bookId/pages/:pageId')
  .get(pages.page)
  .put(pages.update)
  .delete(pages.delete);

router.post('/books/:bookId/pages/:pageId/choices', pages.choiceCreate);

module.exports = router;

const Book = require('../models/book');

function indexRoute(req, res, next) {
  Book.find({ book: req.params.bookId, isCompleted: true})
    .then(books => res.json(books))
    .catch(next);
}
function creatingIndexRoute(req, res, next) {
  Book.find({ book: req.params.bookId, isCompleted: false})
    .then(books => res.json(books))
    .catch(next);
}
function showRoute(req, res, next) {
  Book.findById(req.params.id)
    // .populate('ratings.user')
    .then(book => res.json(book))
    .catch(next);
}

function createRoute(req, res, next) {
  Book.create(req.body)
    .then(book => res.status(201).json(book))
    .catch(next);
}
module.exports ={
  index: indexRoute,
  creatingIndex: creatingIndexRoute,
  show: showRoute,
  create: createRoute
};

const Page = require('../models/page');

function indexRoute(req, res, next) {
  // Find the pages for the request book
  Page.find({ book: req.params.bookId })
    .then(pages => res.json(pages))
    .catch(next);
}

function showRoute(req, res, next) {
  Page.findById(req.params.pageId)
    .populate('book')
    .then(page => res.json(page))
    .catch(next);
}


function createRoute(req, res, next) {
  Page.create(req.params.bookId)
    .then(page => res.status(201).json(page))
    .catch(next);
}

// Get the first page for this book
function firstRoute(req, res, next) {
  Page.findOne({ book: req.params.bookId, isFirstPage: true })
    .then(page => res.json(page))
    .catch(next);
}

module.exports ={
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  first: firstRoute
};

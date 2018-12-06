const Page = require('../models/page');

function showRoute(req, res, next) {
  Page.findById(req.params.id)
    // .populate('ratings.user')
    .then(page => res.json(page))
    .catch(next);
}


function createRoute(req, res, next) {
  Page.create(req.body)
    .then(page => res.status(201).json(page))
    .catch(next);
}
module.exports ={
  create: createRoute,
  show: showRoute
};

const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
  isFirstPage: { type: Boolean, default: false },
  book: {type: mongoose.Schema.ObjectId, ref: 'Book'},
  text: String,
  choices: [{
    text: String,
    nextPage: { type: mongoose.Schema.ObjectId, ref: 'Page' }
  }]
});

module.exports = mongoose.model('Page', pageSchema);

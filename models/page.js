const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
  book: {type: mongoose.Schema.ObjectId, ref: 'Book'},
  text: String,
  choices: [{
    text1: String,
    text2: String,
    nextPage: { type: mongoose.Schema.ObjectId, ref: 'Page' }
  }]
});

module.exports = mongoose.model('Page', pageSchema);

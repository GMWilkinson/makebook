const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  isCompleted: { type: Boolean, default: false },
  title: {type: String, required: true},
  author: {type: String, required: false},
  image: {type: String, required: false},
  price: Number
});

module.exports = mongoose.model('Book', bookSchema);

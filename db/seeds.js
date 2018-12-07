const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Book = require('../models/book');
const User = require('../models/user');
const Page = require('../models/page');

const userIds = [
  '5be9860fcb16d525543ceda1'
];
const userData = [{
  _id: userIds[0],
  username: 'Grint',
  email: 'g@g',
  password: 'pass',
  image: 'https://amac.us/wp-content/uploads/2013/12/1920x1080-funny-giraffe-desktop-wallpapers-free-download-backgrounds.jpg'
}, {
  _id: userIds[1],
  username: 'Rob',
  email: 'r@r',
  password: 'pass',
  image: 'https://amac.us/wp-content/uploads/2013/12/1920x1080-funny-giraffe-desktop-wallpapers-free-download-backgrounds.jpg'
}];

const bookIds = [
  '5be9860fcb16d525543beda1',
  '5be9860fcb16d525543beda2'
];

const pageIds = [
  '5be9860fcb16d525543aeda1',
  '5be9860fcb16d525543aeda2',
  '5be9860fcb16d525543aeda3',
  '5be9860fcb16d525543aeda4',
  '5be9860fcb16d525543aeda5',
  '5be9860fcb16d525543aeda6'
];

const bookData = [{
  _id: bookIds[0],
  title: 'My first book',
  author: 'Grant',
  image: 'http://www.dahkai.com/postpic/2010/09/old-leather-book-cover_81124.jpg'
}, {
  _id: bookIds[1],
  title: 'My great book',
  author: 'Rob',
  image: 'http://www.dahkai.com/postpic/2010/09/old-leather-book-cover_81124.jpg'
}];

const pageData = [{
  _id: pageIds[0],
  isFirstPage: true,
  book: bookIds[0],
  text: 'You encounter a giant, evil Squirrelgoat',
  choices: [{
    text: 'Run away',
    nextPage: pageIds[1]
  }, {
    text: 'Fight!!!',
    nextPage: pageIds[2]
  }]
}, {
  _id: pageIds[1],
  book: bookIds[0],
  text: 'You escape, but run into a slime covered Nargle Blaster',
  choices: [{
    text: 'Try to eat it',
    nextPage: pageIds[0]
  }, {
    text: 'Run!!!',
    nextPage: pageIds[2]
  }]
}, {
  _id: pageIds[2],
  book: bookIds[0],
  text: 'Nice!, Eating Nargle Blasters invigorates you, weirdo.',
  choices: [{
    text: 'Try to eat it',
    nextPage: pageIds[1]
  }, {
    text: 'Run!!!',
    nextPage: pageIds[0]
  }]
}, {
  _id: pageIds[3],
  isFirstPage: true,
  book: bookIds[1],
  text: 'You are in a dark forest. What will you do?',
  choices: [{
    text: 'Go left',
    nextPage: pageIds[4]
  }, {
    text: 'Go right',
    nextPage: pageIds[5]
  }]
}, {
  _id: pageIds[4],
  book: bookIds[1],
  text: 'You are still in the forest. You die of hunger.',
  choices: []
}, {
  _id: pageIds[5],
  book: bookIds[1],
  text: 'You meet your destiny. You win. (And then die.)',
  choices: []
}];

mongoose.connect(dbURI);
Book.collection.drop();
User.collection.drop();
Page.collection.drop();

Book.create(bookData)
  .then(books => {
    console.log(`${books.length} books created`);
    return Page.create(pageData);
  })
  .then(pages => {
    console.log(`${pages.length} pages created`);
    return User.create(userData);
  })
  .then(users => {
    console.log(`${users.length} users created`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

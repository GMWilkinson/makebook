const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Book = require('../models/book');
const User = require('../models/user');
const Page = require('../models/page');

const userData = [{
  username: 'Grint',
  email: 'g@g',
  password: 'pass',
  image: 'https://amac.us/wp-content/uploads/2013/12/1920x1080-funny-giraffe-desktop-wallpapers-free-download-backgrounds.jpg'
}];
const pageIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];


const bookData = [{
  book: 'Tester',
  author: 'Me',
  image: 'http://www.dahkai.com/postpic/2010/09/old-leather-book-cover_81124.jpg'
}];

const pageData = [{
  pageNo: pageIds[2],
  book: 'Tester',
  text: 'You encounter a giant, evil Squirrelgoat',
  choices: [{
    text: 'Run away',
    nextPage: pageIds[0]
  }, {
    text: 'Fight!!!',
    nextPage: pageIds[1]
  }]
}, {
  pageNo: pageIds[0],
  book: 'Tester',
  text: 'You escape, but run into a slime covered Nargle Blaster',
  choices: [{
    text: 'Try to eat it',
    nextPage: pageIds[1]
  }, {
    text: 'Run!!!',
    nextPage: pageIds[2]
  }]
}, {
  pageNo: pageIds[1],
  book: 'Tester',
  text: 'Nice!, Eating Nargle Blasters invigorates you, weirdo.',
  choices: [{
    text: 'Try to eat it',
    nextPage: pageIds[1]
  }, {
    text: 'Run!!!',
    nextPage: pageIds[2]
  }]
}];

mongoose.connect(dbURI);
Book.collection.drop();
User.collection.drop();
Page.collection.drop();

Book.create(bookData)
  .then(books => {
    console.log(`${books.length} books created`);
    return User.create(userData);
  })
// Page.create(pageData)
//   .then(pages => {
//     console.log(`${pages.length} books created`);
//     return Page.create(pageData);
//   })

  .catch(err => console.log(err));

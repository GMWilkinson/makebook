# MakeBook

MakeBook is an app for creating game-books. A game-book is a book that at the bottom of each page there are choices at the bottom that determine what happens next. The user can create their own game-book and can also read the books that others have created.

To create a book, click on 'Create Your Own Story!' on the nav bar. It will take you to the unfinished books index. Click on the image of the book cover or the title to get taken to the page index where you can then create pages. It is easier to write the pages then link them afterwards.
Each page is given an id on creation. To attach a page to a choice the user has to paste the id of the page to be attached in the box next to the box for the text of the choice itself.

It is made using Node.js, MongoDB, Express, ReactJS, JavaScript and SCSS. It is on port 4000.

I made it mobile first.


# Future Updates

* More user friendly
* Instructions
* Secure route for the books being created so that only the author of the book may edit, delete and add to a book that they are creating.
* The profile page will show a list of all the books that the user has created
* The pages will be seperated by chapter so that once a book gets long it will be a lot easier to manage
* Profile page to only show books created by the user that the profile page relates to
* A complete update of the styling
* Finish the delete functionality, such as when you delete a page the choice that links to it will also be deleted

# Bugs

* Unable to get the books to move to the finished books page once finished
* The pages can be deleted but not the book itself

# Code Snippets

This is the model for the pages. The key 'book' refers to the id of the book that the page belongs to. The key 'nextPage' refers to the id of the next page that the choice connects to. The 'isFirstPage' key is there because the first page has no choices linking it and I couldn't get it to understand any other way.

```javascript
const pageSchema = mongoose.Schema({
  isFirstPage: { type: Boolean },
  pageName: { type: String },
  book: {type: mongoose.Schema.ObjectId, ref: 'Book'},
  text: String,
  choices: [{
    text: String,
    nextPage: { type: mongoose.Schema.ObjectId, ref: 'Page' }
  }]
});
```

```javascript
```

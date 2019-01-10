# MakeBook

MakeBook is an app for creating game-books. A game-book is a book that at the bottom of each page there are choices at the bottom that determine what happens next. The user can create their own game-book and can also read the books that others have created.

![MakeBook](https://i.imgur.com/FEh7vVH.png)

![MakeBook](https://i.imgur.com/nV5cMtn.png)

# Project Brief

* Use Mongo, Express and Node to build an API and a React front-end app that consumes it
* Create an API using at least 2 related models, one of which should be a user
* Include all major CRUD functions in a RESTful API for at least one of those model
* Consume your own API by making your front-end app with React
Add authentication to your API to restrict access to appropriate users
* Deploy your application online so it's publicly accessible
* A readme.md file

# Technologies

* HTML5
* SCSS
* JavaScript
* Node.js
* bcrypt
* Express
* Mongoose
* MongoDB
* React
* Bulma
* Heroku
* Trello

# How to use

To create a book, click on 'Create Your Own Story!' on the nav bar. It will take you to the unfinished books index. Click on the image of the book cover or the title to get taken to the page index where you can then create pages. It is easier to write the pages then link them afterwards.
Each page is given an id on creation. To attach a page to a choice the user has to paste the id of the page to be attached in the box next to the box for the text of the choice itself. In the update that I'm creating at the moment, the id will be replaced by a page name given by the user.

![MakeBook](https://i.imgur.com/jcVo9NA.png)

![MakeBook](https://i.imgur.com/iWAD0El.png)

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

This is the function that GETs the first page of a book.
As there is only one first page in a book, the function checks for the page with 'isFirstPage: true'.

```javascript
function firstRoute(req, res, next) {
  Page.findOne({ book: req.params.bookId, isFirstPage: true })
    .then(page => res.json(page))
    .catch(next);
}
```

This is the 'PageIndex' component. I thought it would be good to show some of the React and Bulma.

```javascript
render() {
  const page = this.state.page;
  const book = this.props.match.params.id;
  console.log('page is', page);
  return (
    <section className="columns">
      {page
        ?
        <div className="column is-12">
          <h1 className="title">All the pages</h1>
          <Link to={`/books/${book}/pages/new`}>Create a new page.</Link>
          <div className="columns is-multiline">
            {page && page.map(page =>
              <div className="column is-3" key={page._id}>
                <div className="card">
                  <header className="card-header">
                    <h2>{page.pageName} {page._id}</h2>
                  </header>
                  <div className="content">
                    <p className="page-index">{page.text}</p>
                  </div>
                  <footer className="card-footer">
                    <Link to={`/books/${book}/pages/${page._id}`} className="card-footer-item">Add Choices</Link>
                    <a href="#" className="card-footer-item">Edit</a>
                    <a className="card-footer-item" onClick={() => this.deletePage(page._id)}>Delete</a>
                  </footer>
                </div>
              </div>
            )}
          </div>
        </div>

        :
        <p>Please wait...</p>}
    </section>
  );
}
```

I made it mobile first. At first it seemed pointless for a writing based app to be used on mobile but it is actually quite good if you have an idea on the go.

![MakeBook](https://i.imgur.com/OSs1zjX.png)

![MakeBook](https://i.imgur.com/cWikwvO.png)

# Future Updates

* More user friendly
* Instructions
* Secure route for the books being created so that only the author of the book may edit, delete and add to a book that they are creating.
* The profile page will show a list of all the books that the user has created
* The pages will be separated by chapter so that once a book gets long it will be a lot easier to manage
* Profile page to only show books created by the user that the profile page relates to
* A complete update of the styling
* Finish the delete functionality, such as when you delete a page the choice that links to it will also be deleted
* Some of the names are not named very well. Also tidy up the code itself and get rid of some of the comments.

# Bugs

* Unable to get the books to move to the finished books page once finished. I will fix this by creating a button that changes the 'isFinished' value to 'true'.
* The pages can be deleted but not the book itself
* When the next page is clicked, the screen position stays in the same place so you have to scroll back up to the top of the page.
* If the first page is deleted, when the user tries to create a new first page it is not given 'isFirstPage: true' so the book becomes unreadable. At present the user has to create a new book if the first page is deleted.

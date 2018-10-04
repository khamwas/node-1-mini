var books = [];
var id = 0;
// {id:"",title:"",author:""}

module.exports = {
  getBook: (req, res, next) => {
    res.status(200).json(books);
  },
  postBook: (req, res, next) => {
    books.push({ id: id, title: req.body.title, author: req.body.author });
    id++;
    res.status(200).json(books);
  },
  putBook: (req, res, next) => {
    let editId = req.params.id;
    bookIndex = books.findIndex(book => book.id == editId);
    // if (req.body.title === "") {
    //   let newTitle = books[bookIndex].title;
    // } else {
    //   let newTitle = req.body.title;
    // }
    // if (req.body.author === "") {
    //   let newAuthor = books[bookIndex].author;
    // } else {
    //   let newAuthor = req.body.author;
    // }

    let newTitle =
      req.body.title == "" ? books[bookIndex].title : req.body.title;
    let newAuthor =
      req.body.author == "" ? books[bookIndex].author : req.body.author;
    books[bookIndex] = {
      id: parseInt(editId),
      title: newTitle,
      author: newAuthor
    };
    res.status(200).json(books);
  },
  deleteBook: (req, res, next) => {
    let deleteId = parseInt(req.params.id);
    bookId = books.findIndex(book => book.id == deleteId);
    books.splice(bookId, 1);
    res.status(200).json(books);
  }
};

const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const bc = require("./controllers/books_controller");
const port = 4000;

var app = express();

app.use(json());
app.use(cors());
app.use(express.static(__dirname + "/../build"));

app.get("/api/books", bc.getBook);
app.post("/api/books", bc.postBook);
app.put("/api/books/:id", bc.putBook);
app.delete("/api/books/:id", bc.deleteBook);

app.listen(port, () => {
  console.log(`port ${port} is listening`);
});

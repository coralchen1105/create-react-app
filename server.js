// In the server side, it needs to run as the same time as client side,
//so run server.js first, then client file/
// In this case, express server not support ES6 (import statement), so it needs to
// change back to ES5

// Call from client site using fetch() data
const express = require("express");
const articles = require("./api/articleData");

const app = express();
const port = process.env.PORT || 5000;

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/api/hello", (req, res) => {
  res.send({ express: articles });
});

app.post("/api/articles", (req, res) => {
  var user_id = req.body.id;
  var title = req.body.title;
  var content = req.body.content;
  var type = req.body.type;
  var date = req.body.date;

  res.send(user_id + " " + title + " " + content + " " + type + " " + date);
});
app.listen(port, () => console.log(`Listening on port ${port}`));

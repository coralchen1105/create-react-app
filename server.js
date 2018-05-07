const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const path = require("path");

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

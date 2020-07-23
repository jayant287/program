
module.exports = require("./src/PathFinding");

var express = require("express");

var path = require("path");

var app = express();

var bodyParser = require("body-parser");

app.use((req, res, next) => {
  bodyParser.json()(req, res, (err) => {
    if (err) {
      //console.error(err);

      console.log("Bad JSON body ");

      return res.sendStatus(400); // Bad request
    }

    next();
  });
});

app.use(express.static(path.join(__dirname, "visual")));

const port = process.env.PORT || 8080;

app.listen(port);

console.log("App is listening on port " + port);

app.get("/", function (req, res) {
  console.log("You have reached an unauthorized site");

  res.status(403).json({ error: "You have reached an unauthorized site" });
});

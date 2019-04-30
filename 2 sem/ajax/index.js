const fs = require("fs");
const express = require("express");
var bodyParser  = require('body-parser');
const app = express();
let router = express.Router();
app.use(bodyParser.json());
app.use("/public/js", express.static("js"));

app.get("/*", function(req, res) {
  if (req.url.startsWith("/public/")) {
    var filePath = req.url.substr(1);
    fs.readFile(filePath, function(error, data) {
      if (error) {
        f404(res);
      } else {
        res.end(data);
      }
    });
  } else {
    f404(res);
  }
});

app.post("/index", function(req, res) {
  console.log(req.body);
  // res.status(200).end(req.body);
});
app.listen(3000);
function f404(res) {
  res.statusCode = 404;
  res.end("not!");
}

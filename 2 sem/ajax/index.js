const fs = require("fs");
const express = require("express");
// var bodyParser  = require('body-parser');
const app = express();
// let router = express.Router();
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
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
  
  fs.writeFile("./public/data.json", JSON.stringify(req.body), err => {
  //fs.writeFile("./public/data.json", (req.body), err => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
  res.status(200).send(req.body);
});
app.listen(3000);
function f404(res) {
  res.statusCode = 404;
  res.end("not!");
}

const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

app.listen(port);

// const https = require('https');
// const http = require('http');
// var options = {
//   key: fs.readFileSync('key/client-key.pem'),
//   cert: fs.readFileSync('key/client-cert.pem')
// };
// http.createServer(app).listen(8080);
// https.createServer(options, app).listen(4443);

app.use("public/css/main.css", express.static("css"));

// app.get("/loren", function(req, res) {
//   console.log(req.url);
//   res.end("vot table re");
//   console.log(res.end);
// });

app.post("/save", function(request, response) {
  console.log(request["good"]);
});

app.get("/*", function(req, res) {
  console.log(req.url);

  if (req.url.startsWith("/public/")) {
    var filePath = req.url.substr(1);
    console.log(filePath);
    fs.readFile(filePath, function(error, data) {
      if (error) {
        f404(res);
      } else {
        // res.setHeader("Content-Type", "text/html");
        res.statusCode = 200; //file found
        res.end(data);
      }
    });
  } else {
    f404(res);
  }
});

function f404(res) {
  res.statusCode = 404; //file is not found
  res.end("Resourse !");
}

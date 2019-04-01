var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS, POST, PATCH, DELETE, PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "ahsfdkkf",
      title: "First Server Side Post",
      content: "This is coming from the server"
    },
    {
      id: "sfgdfdmf,",
      title: "Second Server Side Post",
      content: "This is coming from the server!"
    },
    {
      id: "tryhngfbdvs",
      title: "Third Server Side Post",
      content: "This is coming from the server!!"
    }
  ];

  res.status(200).json({
    message: "Post fetched successfully",
    posts: posts
  });
});

module.exports = app;

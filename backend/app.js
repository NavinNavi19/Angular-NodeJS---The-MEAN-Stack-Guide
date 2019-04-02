const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const postsRoutes = require("./routes/posts");

// DB Connection
mongoose
  .connect(process.env.MONGOCLIENT, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully Connected to the Database");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

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

app.use("/api/posts", postsRoutes);

module.exports = app;

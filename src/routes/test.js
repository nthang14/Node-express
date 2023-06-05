const express = require("express");
const test = express.Router();
const { getHomePage } = require("../controllers/home.controller");
const connection = require("../middleware");
// middleware that is specific to this router
test.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// define the home page route
test.get("/", (req, res) => {
  connection.connect((err) => {
    console.log(err);
    console.log("connection");
  });
  res.send("About birds");
});
// define the about route
test.get("/about", (req, res) => {
  console.log("connection");
  connection.connect((err) => {
    console.log("connection");
  });
  res.send("About birds");
});

module.exports = test;

const express = require("express");
const test = express.Router();

// middleware that is specific to this router
test.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
test.get("/", (req, res) => {
  res.send("Birds home page");
});
// define the about route
test.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = test;

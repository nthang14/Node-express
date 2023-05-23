const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
dotenv.config();
const test = require("./routes/test");

const app = express();
const port = process.env.PORT || 8000;
const host_name = process.env.HOST_NAME || "localhost";

// config static file
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/", test);

app.listen(port, host_name, () => {
  console.log(`Example app listening on port ${port}`);
});

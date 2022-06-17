const express = require("express");
const app = express();

const path = require("path");

const drinksRouter = require("./controller/drinkController");

const cors = require("cors");

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "/images")));

app.get("/", (req, res) => {
  console.log();
});

app.use("/drinks", drinksRouter);

module.exports = app;

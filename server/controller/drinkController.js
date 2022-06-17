const express = require("express");

const drinkController = express();

const drinksData = require("../data/drink");

drinkController.get("/", (req, res) => {
  res.send(drinksData);
});

module.exports = drinkController;

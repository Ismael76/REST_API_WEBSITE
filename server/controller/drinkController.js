const express = require("express");

const drinkController = express();

const Drink = require("../model/drink");

const drinksData = require("../data/drink");

drinkController.get("/", (req, res) => {
  res.send(drinksData);
});

drinkController.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  const newDrink = Drink.addDrink(data);
  res.status(201).send(newDrink);
});

module.exports = drinkController;

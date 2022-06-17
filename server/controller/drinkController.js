const express = require("express");

const drinkController = express();

const Drink = require("../model/drink");

const drinksData = require("../data/drink");

drinkController.get("/", (req, res) => {
  res.send(drinksData);
});

drinkController.post("/", (req, res) => {
  // const data = req.body;
  const newDrink = Drink.addDrink(
    "Rubicon",
    "https://groceries.morrisons.com/productImages/387/387762011_0_640x640.jpg?identifier=c28b06af1a4d24f666f9f86fd81ccbc0"
  );
  console.log(newDrink);
});

module.exports = drinkController;

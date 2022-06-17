const drinkData = require("../data/drink");

class Drink {
  constructor(data) {
    this.name = data.name;
    this.url = data.url;
  }

  static addDrink(data) {
    let newDrink = new Drink({ ...data });
    drinkData.push(newDrink);
    return newDrink;
  }
}

module.exports = Drink;

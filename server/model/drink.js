const drinkData = require("../data/drink");

class Drink {
  constructor(data) {
    this.name = data.name;
    this.url = data.url;
    // let checkURL = [];
  }

  static addDrink(name, url) {
    // checkURL.push(url);
    let newDrink = new Drink({ name: name, url: url });
    drinkData.push(newDrink);
    return newDrink;
  }
}

module.exports = Drink;

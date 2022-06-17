let img = document.getElementById("drinkImg");

let button = document.getElementById("btn");

let counter = 0;

const getDrink = async (counter) => {
  const response = await fetch(`http://localhost:3005/drinks`);
  const data = await response.json();

  let allDrinks = data[counter].url;
  img.setAttribute("src", allDrinks);

  if (counter === data.length) {
    counter = 0;
  }
};

function btnClick() {
  getDrink(counter);
  counter++;
  console.log(counter);
}

button.addEventListener("click", btnClick);

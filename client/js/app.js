let img = document.getElementById("drinkImg");

let button = document.getElementById("btn");

let nameInput = document.getElementById("nameInput");

let urlInput = document.getElementById("urlInput");

let submitBtn = document.getElementById("submitBtn");

let checkURL = [];

let counter = 0;

const getFirstDrink = async () => {
  const response = await fetch(`http://localhost:3005/drinks`);
  const data = await response.json();
  img.setAttribute("src", data[0].url);
};

const getDrink = async () => {
  const response = await fetch(`http://localhost:3005/drinks`);
  const data = await response.json();

  if (counter == data.length) {
    counter = 0;
  }

  let allDrinks = data[counter].url;
  img.setAttribute("src", allDrinks);
};

function btnClick() {
  getDrink(counter);
  counter++;
}

getFirstDrink();
button.addEventListener("click", btnClick);

function addDrink(e) {
  e.preventDefault();

  const drinkData = {
    name: nameInput.value,
    url: urlInput.value,
  };

  checkURL.push(JSON.stringify(drinkData));

  const options = {
    method: "POST",
    body: JSON.stringify(drinkData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:3005/drinks", options)
    .then((r) => r.json())
    .catch((err) => {
      console.log(err);
    });
}

submitBtn.addEventListener("click", addDrink);

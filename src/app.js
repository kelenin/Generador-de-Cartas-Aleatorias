import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(GenerarCartas());
  document.querySelector(".card").innerHTML = GenerarRandomNumber();
};

let GenerarRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];

  let Indexnumb = Math.floor(Math.random() * numbers.length);

  return numbers[Indexnumb];
};

let GenerarCartas = () => {
  let carts = ["spade", "club", "heart", "diamond"];

  let Indexcarst = Math.floor(Math.random() * carts.length);

  return carts[Indexcarst];
};

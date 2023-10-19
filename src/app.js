/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello card generator");
};

function updateCardDimensions(width, height) {
  const card = document.querySelector(".card");
  card.style.width = width + "px";
  card.style.height = height + "px";
}

function startCardGeneratorTimer(interval) {
  generateRandomCard();
  setInterval(generateRandomCard, interval * 1000);
}

document
  .getElementById("generateButton")
  .addEventListener("click", generateRandomCard);

document.getElementById("cardWidth").addEventListener("input", () => {
  const width = parseInt(document.getElementById("cardWidth").value);
  updateCardDimensions(
    width,
    parseInt(document.getElementById("cardHeight").value)
  );
});

document.getElementById("cardHeight").addEventListener("input", () => {
  const height = parseInt(document.getElementById("cardHeight").value);
  updateCardDimensions(
    parseInt(document.getElementById("cardWidth").value),
    height
  );
});

window.addEventListener("load", () => {
  startCardGeneratorTimer(10);
});

function getRandomSuit() {
  const suits = ["heart", "spade", "club", "diamond"];
  const randomIndex = Math.floor(Math.random() * suits.length);
  return suits[randomIndex];
}

function getRandomCardValue() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function generateRandomCard() {
  const suit = getRandomSuit();
  const value = getRandomCardValue();
  const card = document.getElementById("card");

  const topSuit = document.createElement("div");
  topSuit.classList.add("suit", "top-suit");
  topSuit.textContent = getSuitIcon(suit);

  const centerValue = document.createElement("div");
  centerValue.classList.add("center");
  centerValue.textContent = value;

  const bottomSuit = document.createElement("div");
  bottomSuit.classList.add("suit", "bottom-suit");
  bottomSuit.textContent = getSuitIcon(suit);

  while (card.firstChild) {
    card.removeChild(card.firstChild);
  }

  card.appendChild(topSuit);
  card.appendChild(centerValue);
  card.appendChild(bottomSuit);

  card.classList.remove("heart", "spade", "club", "diamond");
  card.classList.add(suit);

  if (suit === "heart" || suit === "diamond") {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
  } else {
    topSuit.style.color = "black";
    bottomSuit.style.color = "black";
  }
}

function getSuitIcon(suit) {
  switch (suit) {
    case "heart":
      return "♥";
    case "diamond":
      return "♦";
    case "spade":
      return "♠";
    case "club":
      return "♣";
    default:
      return "♥";
  }
}

window.addEventListener("load", generateRandomCard);

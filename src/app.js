/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello card generator");
};

// DOM elements
const card = document.getElementById("card");
const cardWidthInput = document.getElementById("cardWidth");
const cardHeightInput = document.getElementById("cardHeight");
const generateButton = document.getElementById("generateButton");

// Initial card dimensions
const initialCardWidth = 250;
const initialCardHeight = 350;

// Event listeners
generateButton.addEventListener("click", generateRandomCard);
cardWidthInput.addEventListener("input", updateCardDimensions);
cardHeightInput.addEventListener("input", updateCardDimensions);
window.addEventListener("load", generateRandomCard);

// Function to update card dimensions
function updateCardDimensions() {
  const width = parseInt(cardWidthInput.value) || initialCardWidth;
  const height = parseInt(cardHeightInput.value) || initialCardHeight;
  card.style.width = width + "px";
  card.style.height = height + "px";
}

setInterval(generateRandomCard, 10000);

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
    centerValue.style.color = "red";
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

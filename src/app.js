/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Im working");
};

// script.js
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

  // Remove any previous content
  while (card.firstChild) {
    card.removeChild(card.firstChild);
  }

  card.appendChild(topSuit);
  card.appendChild(centerValue);
  card.appendChild(bottomSuit);

  // Add the suit class
  card.classList.remove("heart", "spade", "club", "diamond");
  card.classList.add(suit);

  // Conditionally change the suit icon color to red for hearts and diamonds
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
      return "♠"; // Default to spade icon
  }
}

// Generate a random card on page load
window.addEventListener("load", generateRandomCard);

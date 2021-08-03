"use strict";

// Selecting elements to initialize the game
const score1Element = document.querySelector("#score--0");
const score2Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// all scores to zero
score1Element.textContent = 0;
score2Element.textContent = 0;
diceElement.classList.add("hidden");

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generate dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${dice}.png`;
  console.log(dice);

  // 3. Check if rolled dice score is 1, if so then switch player
  if (dice !== 1) {
    // add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch player when score is 1
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

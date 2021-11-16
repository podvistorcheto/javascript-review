"use strict";

// Selecting elements to initialize the game
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score1Element = document.querySelector("#score--0");
const score2Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// all scores to zero
// score1Element.textContent = 0;
// score2Element.textContent = 0;
// diceElement.classList.add("hidden");

// Define variable to live outside the functions
// and to be declared as global variables and can
// accessed in every function everywhere in the code
let scores;
let currentScore;
let activePlayer;
let playing;

//Initialising game with these starting conditions
const gameInit = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1Element.textContent = 0;
  score2Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add("hidden");
  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
};
gameInit();

const switchPlayer = function () {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
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
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0Element.classList.toggle("player--active");
      // player1Element.classList.toggle("player--active");
      // or by calling this function
      switchPlayer();
    }
  }
});
// add the option for holding scores
btnHold.addEventListener("click", function () {
  if (playing) {
    //1. Add current socre to active player score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceElement.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //. Switch to other player
      switchPlayer();
      gameInit();
    }
    // Finish the game
  }
});

btnNew.addEventListener("click", gameInit);
// function () {
// score1Element.textContent = 0;
// score2Element.textContent = 0;
// current0Element.textContent = 0;
// current1Element.textContent = 0;
// player0Element.classList.remove("player--winner");
// player1Element.classList.remove("player--winner");
// player0Element.classList.add("player--active");
// player1Element.classList.remove("player--active"); }

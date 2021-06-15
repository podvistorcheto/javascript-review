'use strict';

// target the selected elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// target the dice element
const diceEl = document.querySelector('.dice');
// make the buttons move
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn-hold');

// set the default scores for both players to zero when starting the game
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
// set the dice not to be shown before is rolled first time
diceEl.classList.add('hidden');

// rolling dice functionality
btnRoll.addEventListener('click', function() {
    // generate random dice number
    let dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    // display dice number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check for rolled 1: if true, switch to next players
    if(dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // change later
    } else{

    }
})

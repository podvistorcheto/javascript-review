'use strict';

// target the selected elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// target the dice element
const diceEl = document.querySelector('.dice');
// make the buttons move
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// set the default scores for both players to zero when starting the game

// we need to state if the game is playing or not
let playing;
let scores;
let currentScore;
let activePlayer;

const init = function() {
    // set the dice not to be shown before is rolled first time
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    // we need to state if the game is playing or not
    playing = true;
    // reset the scores
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1: 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function() {
    if(playing) {  
        // generate random dice number
        const dice = Math.trunc(Math.random() * 6 + 1);
        // display dice number
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // check for rolled 1: if true, switch to next players
        if(dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if(playing) {
        // Add correct score to active players score
        scores[activePlayer] += currentScore;
        console.log(scores[activePlayer]);
        //scores[1] = scores[1] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
        // check is if the score is =< 100 then we have a winner
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    // if not switch to next player
    } 
});
// Addind the new game functionality
btnNew.addEventListener('click', init);
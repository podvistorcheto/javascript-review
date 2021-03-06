"use script";
// DOM MANIPULATION
// how to select an element from the html and css file
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
// this calls the class number and score class from the html
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10; 

// no we can set the value for the guess class like the user wrote herself
// we use .value property cause is an input field
document.querySelector('.guess').value = 23;
// now we access the input element with the .value property which creates an emply value
// because there is nothing there but it will get the actual value
// this will log the .value = 23 in the console new
console.log(document.querySelector('.guess').value);
*/

// Game logic starts with defining the randomized secreNumber
// to compare it with the user input to see if they guessed the number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// mutable variable for decreasing the score for wrong guesses
// this variable stores the data in our code instead only the DOM 
let score = 20; 
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// now we are handling the .onclick event on the button
// we need to use the event listener function and pass it a 
// parameter which catches the reaction
// on action that happens on the page, like mouse moving, key type

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // when there is no input
    // check if the user inserted value input in the box field
    if (!guess) {
        //document.querySelector('.message').textContent = 'No Number input!';
        displayMessage('No user input!');
    // when player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
    // changing the CSS styles if wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    } else if(guess !== secretNumber) {
            if(score > 1) {
                //document.querySelector('.message').textContent =
                //guess > secretNumber ? 'Number simply too high!': 'Number simply too low!';
                displayMessage(guess > secretNumber ? 'Number simply too high!': 'Number simply too low!');
                // decrement the score if !==guess
                score--;
                // display with the decreased score
                document.querySelector('.score').textContent = score;
            // when player looses
            } else {
                displayMessage('GAME OVER');
                document.querySelector('.score').textContent = 0;
            }
    }
});
// CODING CHALLENGE 1
/*
Implement a game reset functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem
*/
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    // reset the styles
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'; 
});
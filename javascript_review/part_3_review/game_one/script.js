"use strict";
"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent =
  "WOW! IT IS THE CORRECT NUMBER!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
// randomize the numbers to be between 1 and 20 without the decimal signs
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// highscore variable setup
let highscore = 0;
// function for displaying message to substiture
// the duplicate code for message display
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// this selects the button check class
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);
  // when invalid input
  if (!guess) {
    displayMessage("Invalid input. Please insert a number!");
    // document.querySelector(".message").textContent =
    //   "Invalid input. Please insert a number!";
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Bravo! Correct number!";
    displayMessage("Bravo! Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    // change page color when player wins
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";
    // check for the highscore value while playing
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too High" : "Too low";
      // score--;
      displayMessage(guess > secretNumber ? "Too High" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost the game!";
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  // when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
// game reset
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

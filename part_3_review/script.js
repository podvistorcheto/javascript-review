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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

// this selects the button check class
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "Invalid input. Please insert a number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Bravo! Correct number!";
  }
});

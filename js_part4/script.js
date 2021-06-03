"use script";
// DOM MANIPULATION
// how to select an element from the html and css file
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
// this will log the .value = 23 in the console
console.log(document.querySelector('.guess').value);
// now we are handling the .onclick event on the button

"use strict";

// function hello() {
//   console.log("Hello SoftUni");
// }
// hello();

// function num1To10() {
//   var loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   var testLoop;
//   for (let x = 0; x < loopArray.length; x++) {
//     testLoop += loopArray[x];
//   }
// }
// num1To10();

// ("use script");

// function hello() {
//   console.log("Hello SoftUni");
// }
// hello();

// function num1To10() {
//   for (let count = 1; count <= 10; count++) {
//     console.log(`"Counting ${count}"`);
//   }
// }
// num1To10();

// function litseNaKvadrat(input) {
//   let a = Number(input[0]);
//   let litse = a * a;
//   console.log(litse);
// }
// litseNaKvadrat(["5"]);

// function inchesToCm(input) {
//   let inch = Number(input[0]);
//   let cm = inch * 2.54;
//   console.log(cm);
// }

// inchesToCm(["5"]);

// function greetingByName(input) {
//   let name = input[0];
//   console.log(`Hello, ${name}!`);
// }
// greetingByName(["Nikki"]);

// function concatenateData(input) {
//   let dataToConcatenate = ["Maria", "Ivanova", 20, "Sofia"];
//   console.log(
//     `You are ${dataToConcatenate[0]} ${dataToConcatenate[1]}, a ${dataToConcatenate[2]}-years old person from ${dataToConcatenate[3]}.`
//   );
// }
// concatenateData();

// // calculate plot area price
// function architectWorks(input) {
//   let name = input[0];
//   console.log(typeof name);
//   let projects = Number(input[1]);
//   let hoursNeeded = projects * 3;
//   console.log(
//     `The architect ${name} will need ${hoursNeeded} hours to complete ${projects} projects`
//   );
// }
// architectWorks(["George", 4]);

// function petFood(input) {
//   let dogs = Number(input[0]) * 2.5;
//   let animals = Number(input[1]) * 4;
//   console.log(`${dogs + animals}lv.`);
// }
// petFood(["13", "9"]);

// function gardenProjects(input) {
//   let plot = Number(input[0]);
//   let beforeDiscoutPrice = plot * 7.61;
//   let discount = beforeDiscoutPrice * (18 / 100);
//   let onsalePrice = beforeDiscoutPrice - discount;
//   console.log(`the final price is ${onsalePrice}
//   the discount included is ${discount}`);
// }
// gardenProjects(["550"]);

// function usdToBgn(input) {
//   let usd = Number(input[0]);
//   let bgn = usd * 1.79549;
//   console.log(bgn);
// }
// usdToBgn(["12.5"]);

// function radiansToDegrees(input) {
//   let radians = Number(input[0]);
//   let degrees = (radians * 180) / Math.PI;
//   console.log(degrees.toFixed(0));
// }

// radiansToDegrees(["0.5236"]);

// function depositCalculator(input) {
//   let depositAmount = Number(input[0]);
//   let tenure = Number(input[1]);
//   let interestRate = Number(input[2]);
//   let annualInterestRate = depositAmount * (interestRate / 100);
//   console.log(annualInterestRate);
//   let monthInterestRate = annualInterestRate / 12;
//   let sum = depositAmount + monthInterestRate * tenure;
//   console.log(sum);
// }

// depositCalculator(["200", "3", "5.7"]);

// function readForSummer(input) {
//   let bookPages = Number(input[0]);
//   let pagesPerHour = Number(input[1]);
//   let daysToRead = Number(input[2]);
//   let timeToRead = bookPages / pagesPerHour;
//   let deliveryTime = timeToRead / daysToRead;
//   console.log(deliveryTime);
// }

// readForSummer(["212", "20", "2"]);
// readForSummer(["432", "15", "4"]);

// // birthday costs
// function birthdayCosts(input) {
//   let birthdayHallPrice = Number(input[0]);
//   let cakePrice = birthdayHallPrice * (20 / 100);
//   //   console.log(cakePrice);
//   let drinksPrice = cakePrice * (45 / 100);
//   //   console.log(drinksPrice);
//   let animationPrice = birthdayHallPrice * (1 / 3);
//   //   console.log(animationPrice);
//   let totalPrice = cakePrice + drinksPrice + animationPrice + birthdayHallPrice;
//   console.log(totalPrice);
// }
// birthdayCosts(["2250"]);
// birthdayCosts(["3720"]);

// pastryShopCharityChampaign
function pastryShopCharityChampaign(input) {
  let dniNaKampaniata = Number(input[0]);
  let broiSladkari = Number(input[1]);
  let broiTorti = Number(input[2]) * 45;
  let broiGofreti = Number(input[3]) * 5.8;
  let broiPala4inki = Number(input[4]) * 3.2;
  let totalIncome = (broiTorti + broiGofreti + broiPala4inki) * dniNaKampaniata;
  let totalExpenses = totalIncome * (1 / 8);
  let returnsForCharity = totalIncome - totalExpenses;
  console.log(returnsForCharity);
}
pastryShopCharityChampaign(["23", "8", "14", "30", "16"]);

"use script";

function hello() {
  console.log("Hello SoftUni");
}
hello();

function num1To10() {
  var loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var testLoop;
  for (let x = 0; x < loopArray.length; x++) {
    testLoop += loopArray[x];
  }
}
num1To10();

("use script");

function hello() {
  console.log("Hello SoftUni");
}
hello();

function num1To10() {
  for (let count = 1; count <= 10; count++) {
    console.log(`"Counting ${count}"`);
  }
}
num1To10();

function litseNaKvadrat(input) {
  let a = Number(input[0]);
  let litse = a * a;
  console.log(litse);
}
litseNaKvadrat(["5"]);

function inchesToCm(input) {
  let inch = Number(input[0]);
  let cm = inch * 2.54;
  console.log(cm);
}

inchesToCm(["5"]);

function greetingByName(input) {
  let name = input[0];
  console.log(`Hello, ${name}!`);
}
greetingByName(["Nikki"]);

function concatenateData(input) {
  let dataToConcatenate = ["Maria", "Ivanova", 20, "Sofia"];
  console.log(
    `You are ${dataToConcatenate[0]} ${dataToConcatenate[1]}, a ${dataToConcatenate[2]}-years old person from ${dataToConcatenate[3]}.`
  );
}
concatenateData();

// calculate plot area price
function architectWorks(input) {
  let name = input[0];
  console.log(typeof name);
  let projects = Number(input[1]);
  let hoursNeeded = projects * 3;
  console.log(
    `The architect ${name} will need ${hoursNeeded} hours to complete ${projects} projects`
  );
}
architectWorks(["George", 4]);

function petFood(input) {
  let dogs = Number(input[0]) * 2.5;
  let animals = Number(input[1]) * 4;
  console.log(`${dogs + animals}lv.`);
}
petFood(["13", "9"]);

function gardenProjects(input) {
  let plot = Number(input[0]);
  let beforeDiscoutPrice = plot * 7.61;
  let discount = beforeDiscoutPrice * (18 / 100);
  let onsalePrice = beforeDiscoutPrice - discount;
  console.log(`the final price is ${onsalePrice}
  the discount included is ${discount}`);
}
gardenProjects(["550"]);

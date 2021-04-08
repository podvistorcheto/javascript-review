/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);
////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";
let PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);
////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);
////////////////////////////////////
// let, const and var
let age = 30;
age = 31;
const birthYear = 1991;
// birthYear = 1990;
// const job;
var job = 'programmer';
job = 'teacher'
lastName = 'Schmedtmann';
console.log(lastName);
////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);




const now = 2037;
const ageDeyan = now - 1983;
const ageKiril = now - 1988;
console.log(ageDeyan, ageKiril);

console.log(ageDeyan * 2, ageKiril / 10, 2**3);

const firstName = 'Deyan';
const lastName = 'Denev';
console.log(firstName + ' ' + lastName);

let x = 10+5;
x += 10;
x *=4;
console.log(x);


console.log(ageDeyan > ageKiril);
console.log(ageKiril <= 18);

const isFullAge = ageKiril >=18;
console.log(now-1991 > now - 2018);


// Coding assigment 1
const country = 'Bulgaria';
const continent = 'Europe';
const language = 'Bulgarian';
let population = 7.5;
console.log(population /2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 = 
    country + 
    ' is in ' +
    continent +
    ', and its ' +
    population + 
    ' million speak ' +
    language;
console.log(description1);
console.log(typeof description1);



// Operators Precedence
const now = 2021;
const ageDeyan = now - 1983;
const ageKiril = now - 1988;
console.log(now-1991 > now - 2018);

let x, y;
x = y = 25-10-5;
console.log(x, y);

const averageAge = (ageDeyan + ageKiril) / 2;
console.log(ageDeyan, ageKiril, averageAge);


// Coding challenge 1
// ex. 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMark = massMark/heightMark ** 2;
const bmiMark2 = massMark /(heightMark * heightMark);
const bmiJohn = massJohn/heightJohn ** 2;
const bmiJohn2 = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiMark2);
console.log(bmiJohn, bmiJohn2);
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// ex. 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const bmiMark = massMark/heightMark ** 2;
const bmiMark2 = massMark /(heightMark * heightMark);
const bmiJohn = massJohn/heightJohn ** 2;
const bmiJohn2 = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiMark2);
console.log(bmiJohn, bmiJohn2);
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

const firstName = 'Deyan';
const job = 'teacher';
const birthYear = 1983;
const year = 2021;

const deyan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(deyan);

const deyanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(deyanNew);

console.log(`Just a regular string......`);
console.log(`Just
a regular
string......`);

// Taking basic decisions if/else statemetns
const age = 17;
const isOldEnough = age >= 18;

// in the paranthesis we put the condition to be valuatedIF is TRUE, then in curly braces
// we put the code meant to executewhen the condition is found true
if (isOldEnough) {
    console.log('Kiril can start driving license. Congrats!');
} else {
    const yearsLeft = 18 - age;
    console.log(`Kiril is too young. Wait another ${yearsLeft} years. Cheers`);
}

let century;
const birthYear = 2001;
if (birthYear <=2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Coding challenge 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const bmiMark = massMark/heightMark ** 2;
const bmiMark2 = massMark /(heightMark * heightMark);
const bmiJohn = massJohn/heightJohn ** 2;
const bmiJohn2 = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiMark2);
console.log(bmiJohn, bmiJohn2);
const markHigherBMI = bmiMark > bmiJohn;
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
}
*/

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23'/ '2');
console.log('23' > '18')

let n = '1' + 1;
n = n - 1
console.log(n);

let 
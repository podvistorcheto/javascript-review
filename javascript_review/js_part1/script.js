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


const age = 17;

if(age >=18) {
    console.log('Sarah can start driving license ');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}



const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log('String with \n\ new line');


const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving lessons')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah needs to wait ${yearsLeft} years to start driving lessons`);
}




let century;
const birthYear = 2012;
if(birthYear <= 2000) {
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



// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// type coercion 
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' > '18');

let n = '1' + 1; //11
n = n - 1; // 11-1
console.log(n); // 10



// Truthly and Falsy values

// 5  falsy values in .js : 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 5;
if(money) {
    console.log("Do not spend it all");
} else console.log("You should get a job");

let height = 0;
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

// Equality Operators: == vs. ===

const favourite = Number(prompt("What is your favourite number"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
}
  else {
    console.log('Number is not 23 or 7')
}

if(favourite !==23) console.log('Why not 23?');



// Boolean logic
const hasDriverLic = true;
const hasGoodVis = true;

console.log(hasDriverLic && hasGoodVis);
console.log(hasDriverLic || hasGoodVis);
console.log(!hasDriverLic);
//practical example
const shouldDrive = hasDriverLic && hasGoodVis;

if(shouldDrive) {
    console.log('Sarah should drive!')
} else {
    console.log('Someone else should drive')
}

// same can be written this way
if(hasDriverLic && hasGoodVis) {
    console.log('Sarah should drive!')
} else {
    console.log('Someone else should drive')
}

const isTired = true;
console.log(hasDriverLic && hasGoodVis && isTired)

if(hasDriverLic && hasGoodVis && !isTired) {
    console.log('Sarah should drive!')
} else {
    console.log('Someone else should drive')
}

*/

// Coding challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


// first we calc the avg for each team

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas)

// 2nd compare the results

if(scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreDophins === scoreKoalas) {
    console.log('Both win the trophy!');
}


// bonus 1 and 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas)

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreKoalas  >= 100 && scoreDolphins >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy!');
}


// Switch statement

const day = 'anyday';

switch(day) {
    case 'monday': // i.e day === monday
        console.log('Plan course structure');
        console.log('Go to coding meetup');
    break;
    case 'tuesday': 
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
    break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}


if(day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day === 'tuesday') {
    console.log('Prepare theory videos');
} else if(day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if(day === 'friday') {
    console.log('Record Videos');
} else if(day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!')
}


// Statement and Expressions

if(23>10) {
    const str = '23 is bigger than 10!'
}


// Ternary operator
const age = 19;
//age >= 18 ? console.log('I like to drink wine'):
//console.log('I like to drink water');

const drink = age >= 18 ? 'wine': 'water';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`);



// Coding challenge #4
Tip calculator
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300
*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15: bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

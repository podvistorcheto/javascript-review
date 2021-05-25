'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!')
*/


/* 
function is a piece of code that we reuse in our code
it holds one or more value
the code in the curly braces holds the function body
which is the code to be executed when running/calling the function
*/
/*
function logger() {
// curly braces holds the body of the function
    console.log('My name is Deyan');
}

// calling / running / invoking the function
logger();
logger();
logger();


here the fruit processor is the function
it is like a maching where we put data parameters
which in this case are apples and oranges
these data parameters which are defined when we 
call the function


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
// now we calli the function and passing values or arguements to the parameters
fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991);


// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

// arrow function with one line of code and one parameter

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


// arrow function with more than one parameter
// requires curly braces if we have more than one 
//line of code or more than one parameter 
//like below with birthYear and firstName

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement this is with two lines of code;
    return `${firstName} retires in ${retirement} years`; 
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));



// Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    cutFruitPieces(apples);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples
    ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    }   else {
        console.log(`${firstName} has already retired.`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*

Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 



// 1.calculate average function

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));

// 2. calculate average for both teams
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

// 3. check winner function
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins is the winner! (${avgDolphins}) vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas is the winner (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No teams wins.....')
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// 4. for this test we need to change the var definitions for scoreDolphins and 
// scoreKoalas from const to let to make them mutable

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



// ARRAYS

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length - 1])];
console.log(ages);

// Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends);
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

// Coding challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) �
GOOD LUCK 



const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15:
    bill * 0.2;
}

// same can be written with an arrow function
//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]),
calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);




// OBJECTS

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'age',
    ['Michael', 'Peter', 'Steven']
];

// object has 5 properties (line 318-322) and
// has key and values firstName is variable key and 'Jonas its value
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+ nameKey]);
console.log(jonas['last'+ nameKey]);


const interestedIn = prompt('What do you want to know about Jonas? Choose between firsName, lastName, age, job, friends');

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else  {
    console.log('Wrong request!What do you want to know about Jonas? Choose between firsName, lastName, age, job, friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);


// Challenge 
// log to the console this string with hardcoding it
// Jonas has 3 friends, and his best friend is called Michael
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`)


// HOW TO ADD FUNCTIONS TO OBJECTS
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    
    //calcAge: function(birthYear) {
    //    return 2037 - birthYear;
    //}
    // in the method below 'this' calls the
    // object jonas in the function
    calcAge: function() {
        // line 370 call the object jonas
        console.log(this);
        // line 372 codes the object property
        this.age = 2037 - this.birthYear;
        return 2037 - this.birthYear;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}
        -years old ${jonas.job} and he has ${this.hasDriversLicense ? 'a' : 'no'}
        driver's license`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
//console.log(jonas['calcAge'](1991));
console.log(jonas.getSummary());


// Challenge
// log the string ' Jonas is 46 year old teacher and has 
// or has not driver's license - see line 376 to 380

// Coding challenge # 3 Objects

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK 



const mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    mass: 78,

    calcBMI: function() {
        return this.bmi = this.mass / this.height ** 2;
    }
}

const john = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 92,

    calcBMI: function() {
        return this.bmi = this.mass / this.height ** 2;
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(mark.bmi, john.bmi);

if ( mark.bmi < john.bmi) {
    console.log(`${john.fullName} has higher BMI (${john.bmi}) than ${mark.fullName}`);
} else if ( john.bmi < mark.bmi) {
    console.log(`${mark.fullName} has higher BMI (${mark.bmi}) than ${john.fullName}`);
} else {
    console.log('No BMI found!');
}



// ITERATION: THE FOR LOOP

console.log('Lifting 1');
console.log('Lifting 2');
console.log('Lifting 3');
console.log('Lifting 4');
console.log('Lifting 5');
console.log('Lifting 6');
console.log('Lifting 7');
console.log('Lifting 8');
console.log('Lifting 9');
console.log('Lifting 10');


// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting ${rep}`);
}


/// LOOPING THROUGH ARRAYS, BREAKING AND CONTINUING 

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'age',
    ['Michael', 'Peter', 'Steven'], 
    true
];
// create new array that contains values based on the 
// jonas array
const types = [];

for(let i=0; i < jonas.length; i++) {
    // Reading from the jonas array
    console.log(jonas[i], typeof jonas[i]);
    // creates new array based on the values of jonas
    // with types[i] = typeof jonas[i]; or:
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i=0; i< years.length; i++) {
    // push the ages scores to the ages string
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue stops the iteration and does not produce the rest of the code
console.log('-----SHOW ONLY STRINGS IN THE JONAS ARRAY------')
for(let i=0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

// break 
console.log('----- BREAK WITH NUMBER ------')
for(let i=0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
// LOOPING BACKWARDS AND LOOPS IN LOOPS
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'age',
    ['Michael', 'Peter', 'Steven'], 
    true,
    false
];

// loop it backwards
for(let i = jonas.length - 1; i >= 0; i-- ) {
    console.log(i, jonas[i]);
}

/// loop in a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Start exercise ${exercise}----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting ${rep}`)
    }
}


//for (let rep = 1; rep <= 10; rep++) {
//    console.log(`FOR: Lifting ${rep}`);
//}

let rep = 1;
while (rep <=3) {
    console.log(`WHILE: Lifting ${rep}`);
    rep++;
}

let dice = Math.fround(Math.random()) * 6 + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    if (dice === 6) console.log('Loops ends!');
}

// CODING CHALLENGE #4
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

//1.
const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52,
];

// 2.
 let tips = [];
 let totals = [];

 const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15:
    bill * 0.2;
}

for (let i=0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);
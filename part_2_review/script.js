'use strict'
/*
function logger() {
    console.log('My name is Jonas');
}

// calling / invoking / running the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

fruitProcessor(5,0);
// reuse the function
const appleJuice = fruitProcessor(5,0);
console.log(fruitProcessor(5,0));

// reuse again
const multiFruit = fruitProcessor(8,7);
console.log(multiFruit);

const num = Number("23");

// functions declarations vs function expressions
function calcAgeDeclaration(birthYear) {
    return 2037 - birthYear;
};

const age1 = calcAgeDeclaration(1991);
console.log(age1);


const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAgeExpression(1991);
console.log(age1, age2);

// Arrow functions
const calcAgeArrow = birthYear => 2037 - birthYear;
const age3 = calcAgeArrow(1991);

console.log(age3);

const yearsToRetire = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retire = 65 - age;
    return `${firstName} retires in ${retire} years`;    
}

console.log(yearsToRetire(1991, 'Jonas'));
console.log(yearsToRetire(1980, 'Bob'));


// arrays for storing data
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = ['Jonas'];
const jonas = ['Jonas', 'Schmatke', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1991, 1984, 2008, 2018, 2020];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length - 1])];
console.log(ages);

// basic methods with arrays
const friends = ['Michael', 'Steven', 'Peter'];
const newfriends = friends.push('Jay');
console.log(friends);
console.log(newfriends);

friends.shift();
console.log(friends);
friends.pop();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Peter'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
friends.push(23);
console.log(friends.includes(23));
console.log(friends);
if (friends.includes(23)) {
    console.log(`Your string now includes ${friends[2]}.`);
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
array)

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.20;
};

// same can be written using arrow function
//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;

const bills = [125, 556, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length -1])];
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[bills.length -1] + tips[tips.length - 1]];
console.log(bills);
console.log(tips);
console.log(totals);



// Objects
// this is an array
const jonasArray = [
    'Jonas',
    'Schmet',
    2037 - 1991,
    'teacher',
    ['Mike', 'Steve', 'Peter']
];

// this is an object
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmet',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Mike', 'Steve', 'Peter']
// };

// get data from an object
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);
// // get date from object using repeating parts in property name for an object
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last'+ nameKey]);

// extract data from object using user input - please use the bracked notation 
// const interestedIn = prompt('Interested in Jonas Biopic? Choose between job, friends, firstName, lastName, age.');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request. Please choose between job, friends, firstName, lastName, age.');
// }

// add new properties to the location using brackets and dots
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// // small challenge - write a sentence using brackets notation
// console.log(`${jonas.firstName} has ${jonas.friends.length} and his
// best friend is ${jonas.friends[0]}`);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmet',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Mike', 'Steve', 'Peter'],
    hasDriversLicense: false,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function() {
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}
-years old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'}
drivers license.`
    }
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge']());


// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// Challenge - write a sentence 'Jonas is 46 old teacher with a drivers license'
console.log(jonas.getSummary());

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


const mark = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        return this.bmi = this.mass /this.height ** 2;
    }
};

const john = {
    fullName: 'John',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        return this.bmi = this.mass /this.height ** 2;
    }
};

console.log(mark.bmi, john.bmi);
console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`)
} else {
    console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`)
};




// LOOPS

console.log('Do 20 pushups day 1');
console.log('Do 20 pushups day 2');
console.log('Do 20 pushups day 3');
console.log('Do 20 pushups day 4');
console.log('Do 20 pushups day 5');
console.log('Do 20 pushups day 6');
console.log('Do 20 pushups day 7');
console.log('Do 20 pushups day 8');
console.log('Do 20 pushups day 9');
console.log('Do 20 pushups day 10');

for loops keeps running while condition rep <= 10; is TRUE

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Do 20 pushups day ${rep}`);
}



// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmet',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Mike', 'Steve', 'Peter']
// };

const jonas = [
    'Jonas',
    'Schmet',
    2037 - 1991,
    'teacher',
    ['Mike', 'Steve', 'Peter'],
    true,
    false
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
};
// log the new array based on previous array
console.log(types);

// calculate values in array with a for loop
const years = [1991, 1984, 2008, 2020, 2021];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break statement
console.log('----ONLY STRINGS');
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
};

console.log('---- BREAK WHEN FIND A NUMBER');
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
};

// LOPPING BACKWARDS IN ARRAY
const jonas = [
    'Jonas',
    'Schmet',
    2037 - 1991,
    'teacher',
    ['Mike', 'Steve', 'Peter'],
    true,
    false
];


for (let i = jonas.length - 1; i >=0; i--) {
    console.log(i, jonas[i]);
}

// loop inside another loop
for (let pushup = 1; pushup < 4; pushup++) {
    console.log(`==== Starting pushups SEQUENCE ${pushup}`);

    for (let rep=1; rep < 21; rep++) {
        console.log(`==== Doing pushups repetition ${rep}`);
    }
};



// WHILE LOOP
// it runs while a condition is true

let rep = 1;
while (rep <= 20) {
    console.log(`==== WHILE LOOP: Starting pushups SEQUENCE ${rep}`);
    rep++;
}

// roll the dice minigame until we score value of 6
let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Score 6, loop is about to end!');
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

// 1 

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
    52
];
//2.
const tips = [];
const totals = [];

//3. calculative function
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.20;
};

//4. loop through the array
for (let i=0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

//5. Calculate the average

const calcAverage = function(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
// as we loop through the array we keep adding the current value to the sum variable
        //sum = sum + arr[i];
        sum += arr[i];
    }
// test with    console.log(sum);
// we want to return the sum divided the number of elements in the array
    return sum / arr.length;
}
//test the function with random values to log
//calcAverage([2,3,6]);
console.log(calcAverage([2,3,7]));
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));

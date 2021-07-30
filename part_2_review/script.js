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
array)*/

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

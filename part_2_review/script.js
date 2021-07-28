'use strict'

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
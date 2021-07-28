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
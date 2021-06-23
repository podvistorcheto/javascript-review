'use strict';
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName} is ${age}, born in ${birthYear}.`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // this same variable name will print Steven 
            // instead of Jonas, since the fistName is defined 
            // in this scope, hence the programme does not 
            // need to do a look up outside this block/if scope
            const firstName = 'Steven';
            const str = `Oh, you are a millenial, ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a + b;
            }
            // here we redefine/mutate the output variable and the console 
            // print both values of the output variable, if we put it as
            // const output = "NEW OUTPUT" we wil just get the same value as in the 
            // function scope
            output =  'NEW OUTPUT!';
        }
        console.log(millenial);
        console.log(add(2,3));

        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);


// HOISTING AND TDZ IN PRACTICE
//hoisting with variables
console.log(me); // logs undefined because is declared with var
//console.log(job); // error cannot access it because is in the TDZ
//console.log(year); // same error cannot access it because is in the TDZ

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// hoisting with functions
console.log(addDecl(2,3));
//console.log(addExpr(2,3));
//console.log(addArrow(2,3));

function addDecl(a,b) {
    return a + b;
};

const addExpr = function(a,b) {
    return a + b;
}

const addArrow = (a, b) => a + b;
// Example
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

// 'this' keyword
// method: this = <object that is calling the method>
const jonas = {
    name: 'Jonas',
    year: 1989,
    calcAge: function() {
        // calcAge is method, this calls jonas
        return 2037 - this.year;
    }
};
jonas.calcAge(); //48


//
console.log(this); // global scope
// simple function
const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1991);
// arrow function
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // points to the this keyword of the global scope at line 90, which is the parent scope
};
calcAgeArrow(1980);
// use this inside of a method
const jonas = {
    year: 1991,
    calcAge: function() {
        // this calls the owner of the method jonas
        console.log(this);   
        console.log(2037 - this.year);
    }
};
jonas.calcAge(); //46

const matilda = {
     year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();



const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        //console.log(this);
        console.log(2037-this.year);

    },
    // arrow function in the global scope
    greet: () => console.log(`Hey ${this.firstName}`)
};
// calling the function will log Hey undefined because is in the global scope
jonas.greet();

const isMillenial = function() {
    console.log(this);
    console.log(this.year >= 1981 && this.year <= 1996);
};
isMillenial();
//primitives values
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
//objects
const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend',friend);
console.log('Me', me);
*/
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage', marriedJessica);

// Merge objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage',jessica2);
console.log('After marriage', jessicaCopy);
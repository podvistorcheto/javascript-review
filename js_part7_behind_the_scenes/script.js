// 'use strict';

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
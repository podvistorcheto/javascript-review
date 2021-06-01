"use script";
/* 
const x = "23";

console.log();

// Example for problem solvings
// We work for company building a smart home thermometer
Our most recent task is this: 'Given the array of temperature
in one day, calculate the temp amplitude. Keep in mind that sometimes
there might be a sensor error 

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// we write first the function that is call calcTemeAmlitude
// that receives with array of temperatures named temps
calcTempAmplitude = function (temps) {
// first we need to create loop that iterates through the array
    let max = temps[0];
    let min = temps[0];    
    for (let i=0; i < temps.length; i++) {
// its better to transform temps[i] into a variable since we will be using it so much
        const currTemp = temps[i]; 
        // use continue to skip through the array if see a number
        if (typeof currTemp !== 'number') continue;
        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }
    console.log(min, max);
    return max - min;
};
calcTempAmplitude([3, 7, 8, 23]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);



// PROBLEM CONTINUES BELOW
// YOur manager says this function should be able to
// receive two arrays of temparatures
// here the problem is how we can merge 2 arrays;
calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
        // first we need to create loop that iterates through the array
        let max = temps[0];
        let min = temps[0];    
        for (let i=0; i < temps.length; i++) {
    // its better to transform temps[i] into a variable since we will be using it so much
            const currTemp = temps[i]; 
            // use continue to skip through the array if see a number
            if (typeof currTemp !== 'number') continue;
            if (currTemp > max) max = currTemp;
            if (currTemp < min) min = currTemp;
        }
        console.log(min, max);
        return max - min;
    };
    const amplitudeNew = calcTempAmplitudeNew([3,5,1], [9,0,4]);
    console.log(amplitudeNew);


const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degree celsius:')),
        };
    console.log(measurement);
    // console.table(measurement);
    console.log(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin());


calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
        // first we need to create loop that iterates through the array
        let max = 0;
        let min = 0;    
        for (let i=0; i < temps.length; i++) {
    // its better to transform temps[i] into a variable since we will be using it so much
            const currTemp = temps[i]; 
            // use continue to skip through the array if see a number
            if (typeof currTemp !== 'number') continue;
            if (currTemp > max) max = currTemp;
            if (currTemp < min) min = currTemp;
        }
        console.log(min, max);
        return max - min;
    };
    const amplitudeBug = calcTempAmplitudeBug([3,5,1], [9,5,4]);
    console.log(amplitudeBug);




    // Coding challenge # 1
    /*
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]


// 1. create two array with both datasets
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function(arr1, arr2) {
    // merge the arrays 
    temps = arr1.concat(arr2);
    console.log(temps);
    // create var for days of the week
    let days = temps[0];
    //for (let i=0; i < tempData.length; i++);
    //if (days[i])

}



// PROBLEM 1; Example for problem solvings
// We work for company building a smart home thermometer
//Our most recent task is this: 'Given the array of temperature
// in one day, calculate the temp amplitude. Keep in mind that sometimes
/// there might be a sensor error 


const temparatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


// 1. Understanding the problem
///What is an amplitude? = difference between max and min temp
// Calculate the amplitute?
// How to check for sensor error? 

// 2. Breaking it to sub-problems?
// How to avoid the sensor error
// How to find min and max temp?
// Substract min and max to find the amplitude


calcTempAplitude = function(temps) {
    let max = temps[0]; 
    let min = temps[0];
    for (let i=0; i < temps.length; i++) {
        const currTemp = temps[i]
        if (typeof currTemp !== 'number') continue;
        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }
    console.log(min, max);
    return max - min;
};
const amplitude = calcTempAplitude(temparatures);
console.log(amplitude);


// PROBLEM 2 
// Function needs to receive 2 arrays of temps
// 1. Understanding the problem 
// Shall the function has the same functionality twice?
// NO, the function should merge two arrays

// 2. Breaking up into sub-problems
// - How to merge 2 arrays

calcTempAplitudeNew = function(t1, t2) {
    const temps = t1.concat(t2);
    let max = temps[0]; 
    let min = temps[0];
    for (let i=0; i < temps.length; i++) {
        const currTemp = temps[i]
        if (typeof currTemp !== 'number') continue;
        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }
    console.log(min, max);
    return max - min;
};
const amplitudeNew = calcTempAplitudeNew([5,7,1],[9, 2, 7]);
console.log(amplitudeNew);


// DEGUBBUNG IN THE CONSOLE WITH DEBUGGER
// now we need to convert the temp from celsius to kelvin to do some more 
// measurements for the imaganery temperatures project
const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius')), 
    }
    console.table(measurement); // this logs the object
    // and shows that the value is with the prompt function
    // prompt always returns string and cannot calculate the measurement.value to a number
    // hence we need to add in value key a number function before the prompt function
    console.log(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin());



 // Coding challenge # 1
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4] 
    */

const printForecast = function(arr1, arr2) {
    const currTemp = arr1.concat(arr2);
        for (let i=0; i < currTemp.length; i++) {
            console.log(`On day ${i+1} the temperature will be ${currTemp[i]} degrees celsius`);
        }
    }
printForecast([17, 21, 23], [12, 5, -5, 0, 4]);


// can be solved like this 
// as in the course solution
const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecastNew = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]} ºC in ${i+1} days ...`;
    }
    console.log('... ', str);
}
printForecastNew(testData1);

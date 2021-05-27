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
*/

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
    */


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
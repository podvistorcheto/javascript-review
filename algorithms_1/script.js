// // const test = true;
// // console.log(test);
// const fizzBuzzOne = function (n) {
//     let answer = [];
//     for (let i = 1; i <= n; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         answer.push("FizzBuzz");
//       } else if (i % 3 === 0) {
//         answer.push("Fizz");
//       } else if (i % 5 === 0) {
//         answer.push("Buzz");
//       } else {
//         answer.push(i.toString());
//       }
//     }
//     return answer;
//   };
//   // console.log(fizzBuzzOne(3));
//   // console.log(fizzBuzzOne(5));
//   // console.log(fizzBuzzOne(15));
//   //Runtime: 89 ms, faster than 37.56% of JavaScript
//   //online submissions for Fizz Buzz.
//   // Memory Usage: 40.7 MB, less than 78.99% of JavaScript
//   //online submissions for Fizz Buzz.
  
//   const fizzBuzzTwo = function (n) {
//     let answer = [];
//     for (let x = 1; x <= n; x++) {
//       let newString = "";
//       if (x % 3 === 0) {
//         newString += "Fizz";
//       }
//       if (x % 5 === 0) {
//         newString += "Buzz";
//       }
//       answer.push(newString.length ? newString : x.toString());
//     }
//     return answer;
//   };
//   // console.log(fizzBuzzTwo(3));
//   // console.log(fizzBuzzTwo(5));
//   // console.log(fizzBuzzTwo(15));
  
//   // Runtime: 125 ms, faster than 16.76% of JavaScript online submissions for Fizz Buzz.
//   //Memory Usage: 40.7 MB,
//   //less than 86.81% of JavaScript online submissions for Fizz Buzz.
  
//   const fizzBuzzThree = function (n) {
//     let memoTable = [
//       [3, "Fizz"],
//       [5, "Buzz"],
//     ];
//     let output = [];
//     for (let x = 1; x <= n; x++) {
//       let newString = "";
//       for (let y = 0; y < memoTable.length; y++) {
//         if (x % memoTable[y][0] === 0) {
//           newString += memoTable[y][1];
//         }
//       }
//       output.push(newString.length ? newString : x.toString());
//     }
//     return output;
//   };
// //   console.log(fizzBuzzThree(15));
  
//   // TwoSum Leetcode Manual Solution with input: nums = [2,7,11,15]; target = 9;
//   const twoSumManual = function (nums, target) {
//     for (let x = 0; x < nums.length; x++) {
//       for (let y = x + 1; y < nums.length; y++) {
//         if (nums[x] + nums[y] === target) {
//           return [x, y];
//         }
//       }
//     }
//   };
//   // console.log(twoSumManual([2, 7, 11, 15], [26]));
  
//   // TwoSum Leetcode - Linear Solution with input: nums = [2,7,11,15]; target = 9;
// const twoSumLinear = function (nums, target) {
//     let numObj = {};
//     for (let x = 0; x < nums.length; x++) {
//       let exactDifference = target - nums[x];
//       if (numObj[exactDifference] !== undefined) {
//         return [numObj[exactDifference], x];
//       }
//     numObj[nums[x]] = x;
//     }
// };
// // console.log(twoSumLinear([2, 7, 11, 15], [9]));
// // console.log(twoSumLinear([3, 2, 4], [6]));
// // console.log(twoSumLinear([3, 3], [6]));
  
//   // Leetcode fibbonacci soluition one: simple recursion
//   const fib = function (n) {
//     if (n <= 1) {
//       // if (n <= 0 || n <= 1)
//       return n;
//     } else {
//       return fib(n - 1) + fib(n - 2);
//     }
//   };
  
// //   console.log(fib(2));
// //   console.log(fib(3));
// //   console.log(fib(4));
  
//   // Leetcode fibbonacci solution two: memoized recursion
  
// const memoFibb = function (n) {
//     let memo = {
//         "0":1,
//         "1":1,
//     };
//     for (let x = 2; x <= n; x++) {
//       if (n <= 1) {
//         return 1;
//       } else {
//         memo[x] = memo[x - 1] + memo[x - 2];
//       }
//     }
//     return memo[n];
//   };
// console.log(memoFibb(2));
// console.log(memoFibb(3));
// console.log(memoFibb(4));
  
// binary search algorithm leetCode solved with iteration

const binarySearchIteration = function(nums, target) {
    let startPoint = 0;
    let endPoint = nums.length -1;
    
    while (startPoint <= endPoint) {
        let middlePoint = Math.floor((startPoint + endPoint)/2);
        if (nums[middlePoint] === target) {
            return middlePoint;
        }
        if (nums[middlePoint] < target) {
            startPoint = middlePoint + 1;
        } else {
            endPoint = middlePoint -1;
        }
    }
    return -1;
};
// console.log(binarySearchIteration([-1,0,3,5,9,11,12], 5));
// console.log(binarySearchIteration([-1,0,3,5,9,11,12], 15));


// binary search recursive

function whichCallsMainBinSearchFunction(nums, target) {
    return mainBinarySearchFunction(nums, target, 0, nums.length - 1);
}
// main function  
function mainBinarySearchFunction(nums, target, startIndex, endIndex){
    if (startIndex > endIndex) {
        return -1;
    }
    //main method code goes here
    let midIndex = Math.floor((startIndex + endIndex)/2);
    if (nums[midIndex] === target) {
        return midIndex;
    } else if (nums[midIndex] > target){
        return mainBinarySearchFunction(nums, target, startIndex, midIndex -1);
    } else {
        return mainBinarySearchFunction(nums, target, midIndex + 1, endIndex);
    }
}
console.log(whichCallsMainBinSearchFunction([-1, 0, 3, 5, 9, 12], 5));
console.log(whichCallsMainBinSearchFunction([-1, 0, 3, 5, 9, 12], 0));
console.log(whichCallsMainBinSearchFunction([-1, 0, 3, 5, 9, 12], 15));
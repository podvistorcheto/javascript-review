// // const test = true;
// // console.log(test);
const fizzBuzzOne = function (n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        answer.push("FizzBuzz");
      } else if (i % 3 === 0) {
        answer.push("Fizz");
      } else if (i % 5 === 0) {
        answer.push("Buzz");
      } else {
        answer.push(i.toString());
      }
    }
    return answer;
  };
//   // console.log(fizzBuzzOne(3));
//   // console.log(fizzBuzzOne(5));
//   // console.log(fizzBuzzOne(15));
//   //Runtime: 89 ms, faster than 37.56% of JavaScript
//   //online submissions for Fizz Buzz.
//   // Memory Usage: 40.7 MB, less than 78.99% of JavaScript
//   //online submissions for Fizz Buzz.
  
  const fizzBuzzTwo = function (n) {
    let answer = [];
    for (let x = 1; x <= n; x++) {
      let newString = "";
      if (x % 3 === 0) {
        newString += "Fizz";
      }
      if (x % 5 === 0) {
        newString += "Buzz";
      }
      answer.push(newString.length ? newString : x.toString());
    }
    return answer;
  };
//   // console.log(fizzBuzzTwo(3));
//   // console.log(fizzBuzzTwo(5));
//   // console.log(fizzBuzzTwo(15));
  
//   // Runtime: 125 ms, faster than 16.76% of JavaScript online submissions for Fizz Buzz.
//   //Memory Usage: 40.7 MB,
//   //less than 86.81% of JavaScript online submissions for Fizz Buzz.
  
  const fizzBuzzThree = function (n) {
    let memoTable = [
      [3, "Fizz"],
      [5, "Buzz"],
    ];
    let output = [];
    for (let x = 1; x <= n; x++) {
      let newString = "";
      for (let y = 0; y < memoTable.length; y++) {
        if (x % memoTable[y][0] === 0) {
          newString += memoTable[y][1];
        }
      }
      output.push(newString.length ? newString : x.toString());
    }
    return output;
  };
// //   console.log(fizzBuzzThree(15));
  
//   // TwoSum Leetcode Manual Solution with input: nums = [2,7,11,15]; target = 9;
  const twoSumManual = function (nums, target) {
    for (let x = 0; x < nums.length; x++) {
      for (let y = x + 1; y < nums.length; y++) {
        if (nums[x] + nums[y] === target) {
          return [x, y];
        }
      }
    }
  };
//   // console.log(twoSumManual([2, 7, 11, 15], [26]));
  
//   // TwoSum Leetcode - Linear Solution with input: nums = [2,7,11,15]; target = 9;
const twoSumLinear = function (nums, target) {
    let numObj = {};
    for (let x = 0; x < nums.length; x++) {
      let exactDifference = target - nums[x];
      if (numObj[exactDifference] !== undefined) {
        return [numObj[exactDifference], x];
      }
    numObj[nums[x]] = x;
    }
};
// // console.log(twoSumLinear([2, 7, 11, 15], [9]));
// // console.log(twoSumLinear([3, 2, 4], [6]));
// // console.log(twoSumLinear([3, 3], [6]));
  
//   // Leetcode fibbonacci soluition one: simple recursion
  const fib = function (n) {
    if (n <= 1) {
      // if (n <= 0 || n <= 1)
      return n;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  };
  
//   console.log(fib(2));
//   console.log(fib(3));
//   console.log(fib(4));
  
//   // Leetcode fibbonacci solution two: memoized recursion
  
const memoFibb = function (n) {
    let memo = {
        "0":1,
        "1":1,
    };
    for (let x = 2; x <= n; x++) {
      if (n <= 1) {
        return 1;
      } else {
        memo[x] = memo[x - 1] + memo[x - 2];
      }
    }
    return memo[n];
  };
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

function initMainBinSearchFunction(nums, target) {
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
// console.log(initMainBinSearchFunction([-1, 0, 3, 5, 9, 12], 5));
// console.log(initCallsMainBinSearchFunction([-1, 0, 3, 5, 9, 12], 0));
// console.log(initCallsMainBinSearchFunction([-1, 0, 3, 5, 9, 12], 15));

// COIN CHANGE LEET CODE
const coinChange = function(coins, target) {
    let tableWithTargets = new Array(target + 1).fill(Infinity);
    tableWithTargets[0] = 0;

    for (let coin of coins) {
        for (let i = 0; i < tableWithTargets.length; i++){
            if (coin <= i) {
                let idxAmount = i-coin;
                let targetAmount = tableWithTargets[idxAmount] + 1;
                tableWithTargets[i] = Math.min(targetAmount, tableWithTargets[i])
            }
        }
    }
    return tableWithTargets[tableWithTargets.length -1] === Infinity ? -1 : tableWithTargets[tableWithTargets.length - 1];
}
// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));
// console.log(coinChange([1], 1));
// console.log(coinChange([1], 2));


function superSquad(number) {
    const partitionMatrix = Array(number + 1)
      .fill(null)
      .map(function () {
        return Array(number + 1).fill(null);
      });
    for (let numberIndex = 1; numberIndex <= number; numberIndex += 1) {
      partitionMatrix[0][numberIndex] = 0;
    }
    for (let summandIndex = 0; summandIndex <= number; summandIndex += 1) {
      partitionMatrix[summandIndex][0] = 1;
    }
    for (let summandIndex = 1; summandIndex <= number; summandIndex += 1) {
      for (let numberIndex = 1; numberIndex <= number; numberIndex += 1) {
        if (summandIndex > numberIndex) {
          partitionMatrix[summandIndex][numberIndex] =
            partitionMatrix[summandIndex - 1][numberIndex];
        } else {
          const combosWithoutSummand =
            partitionMatrix[summandIndex - 1][numberIndex];
          const comboWithSummand =
            partitionMatrix[summandIndex][numberIndex - summandIndex];
          partitionMatrix[summandIndex][numberIndex] =
            comboWithSummand + combosWithoutSummand;
        }
      }
    }
    return partitionMatrix[number][number];
  }
//   console.log(superSquad(4));

// coin change 2 - LeetCode 
const changeCoinTwo = function(amount, coins) {
    let testCases = [];
    
    for (let row = 0; row <= coins.length; row++) {
        let array = [];

        for (let col = 0; col <= amount; col++) {
            array.push(-1);
        testCases.push(array);
        }
    }
    for (let check = 0; check <= coins.length; check++) {
        testCases[check][0] = 1;
    }
    for (let check = 1; check <= amount; check++) {
        testCases[0][check]= 0;
    }
    for (let row = 1; row <= coins.length; row++) {
        for (col = 1; col <= amount; col++) {
            if(coins[row-1] <= col){
                testCases[row][col] = testCases[row][col-coins[row-1]] + testCases[row-1][col];
            } else {
                testCases[row][col] = testCases[row-1][col];
            }
        }
    }
    return testCases[coins.length][amount];
}
// console.log(changeCoinTwo(5, [1,2,5]));


const changeUnboundedCoin2 = (amount, coins) => {
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let coin of coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] += dp[i - coin];
      }
    }
    return dp[amount];
};

// console.log(change(10, [3,4,5,6,7,8,9,10]));

// function superSquad(number) {
//     const partitionMatrix = Array(number + 1)
//       .fill(null)
//       .map(function () {
//         return Array(number + 1).fill(null);
//       });
//     for (let numberIndex = 1; numberIndex <= number; numberIndex += 1) {
//       partitionMatrix[0][numberIndex] = 0;
//     }
//     for (let summandIndex = 0; summandIndex <= number; summandIndex += 1) {
//       partitionMatrix[summandIndex][0] = 1;
//     }
//     for (let summandIndex = 1; summandIndex <= number; summandIndex += 1) {
//       for (let numberIndex = 1; numberIndex <= number; numberIndex += 1) {
//         if (summandIndex > numberIndex) {
//           partitionMatrix[summandIndex][numberIndex] =
//             partitionMatrix[summandIndex - 1][numberIndex];
//         } else {
//           const combosWithoutSummand =
//             partitionMatrix[summandIndex - 1][numberIndex];
//           const comboWithSummand =
//             partitionMatrix[summandIndex][numberIndex - summandIndex];
//           partitionMatrix[summandIndex][numberIndex] =
//             comboWithSummand + combosWithoutSummand;
//         }
//       }
//     }
//     return partitionMatrix[number][number];
//   }
  // console.log(superSquad(4));

// VALIDATE SUBSEQUENCE
const validateSubsequence = function(mainArray, subArray) {
    let validSubsequence = [];
    for (let i = 0; i < mainArray.length; i++) {
        if (subArray.includes(mainArray[i])) {
            console.log(true);
            validSubsequence.push(mainArray[i]);
        } else {
            console.log(false);
        }
    } 
    return validSubsequence;
}
console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]));

// algo expert solution
const s = function(a, b) {
    let x = 0;
    let y = 0;
    while (x < a.length && y < b.length) {
        if (a[x] === b[y]) x++; 
        y++;
    }
    return y === b.length;
}
console.log(s([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]));


// Leetcode 46. Permutations
/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] 
*/

const btPermutations = function (nums) {
    // 1. create a variable to populate with the result
    let resultPermutations = [];
    //2. then we create the method to mix them
    const baseCase = function (i, nums) {
      // base case for comparison in the mixing
      if (i === nums.length) {
        // we make a copy of the result and push in the resultPermutation
        resultPermutations.push(nums.slice());
        return;
      }
      for (let j = i; j < nums.length; j++) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        baseCase(i + 1, nums);
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    };
    baseCase(0, nums);
    return resultPermutations;
  };
  console.log(btPermutations([4, 5, 6]));


  // Supernatural Squad 2
const superNaturalSquad2 = function (numTotal, k) {
    // define main results variable
    let resultsArray = [];
    // 1. convert k into array to combine sums from
    let lineArray = [];
    for (let i = 0; i < numTotal; i++){
      lineArray[i] = i+1;
      let newArray = lineArray.slice(k-1);
      console.log(newArray);
    }
    // 2. recursion method - to be added
    // 
    return resultsArray;
}
console.log(superNaturalSquad2(10, 3));
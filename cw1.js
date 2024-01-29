// function beginning(xs) {
//     for (let i = 1; i <= xs.length / 2; i++) {
//       let currentNumber = parseInt(xs.substring(0, i));
//       let nextExpected = currentNumber + 1;
//       let remainingxs = xs.substring(i);
  
//       while (remainingxs.startsWith(nextExpected.toString())) {
//         remainingxs = remainingxs.substring(nextExpected.toString().length);
//         nextExpected++;
//       }
//       if (remainingxs.length === 0) {
//         return currentNumber;
//       }
//     }
//     return parseInt(xs);
//   }
  
//   console.log(beginning("123456789101112131415"));
//   console.log(beginning("17181920"));
//   console.log(beginning("72637236"));
//   console.log(beginning("1112"));
//   console.log(beginning("91011"));
//   console.log(beginning("99100"));
//   console.log(beginning("431243"));
//   console.log(beginning("577495"));
  
  
////////////////////////////////////////////////////////////////////////////////////////////////////


// function sayHello(name, city, state) {
//     const names = name.join(' ');
//     const world = `Hello, ${names}! Welcome to ${city}, ${state}!`;
//     return world;
//   }
  
//   const names = ['John', 'Smith'];
//   const city = 'Phoenix';
//   const state = 'Arizona';
  
//   const world = sayHello(names, city, state);
//   console.log(world);
  

///////////////////////////////////////////////////////////////////////////////////////////////////////


// Functional Addition


// function add(n) {
//   return function(x) {
//     return n + x;
//   }
// }


// var addOne = add(1);
// console.log(addOne(3)); 

// var addThree = add(3);
// console.log(addThree(3)); 


///////////////////////////////////////////////////////////////////////////////////////////////////////////


// How many are smaller than me?

// function smaller(nums) {

//       const results = []
//       for(let i=0 ; i<nums.length;i++){
//         let count =0

//           for(let j=i+1 ;j<nums.length;j++){
//             if(nums[j]<nums[i]){
//               count++;
//             }
//           }
//       results.push(count);
//       }
//       return results;
//   }

//   const int = [1,2,0]
//   const out = smaller(int)
//   console.log(out); 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Rock Paper Scissors

// const rps = (p1, p2) => {
//     if(p1===p2){
//         return "Draw!";
//     }else if(
//         (p1==="rock" && p2==="scissors")||
//         (p1==="scissors" &&  p2==="paper")||
//         (p1 === "paper" && p2 === "rock")
//     ){
//         return "Player 1 won!"
//     }else{
//         return "Player 2 won!"
//     }
// };

// console.log(rps("paper","scissors"));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function latestClock(a, b, c, d) {
//     const digits = [a, b, c, d];
//     const permutations = getPermutations(digits);

//     let latestTime = "00:00";

//     permutations.forEach((perm) => {
//         const time = perm.slice(0, 2) + ":" + perm.slice(2);
//         if (isValidTime(time) && time > latestTime) {
//             latestTime = time;
//         }
//     });

//     return latestTime;
// }

// function getPermutations(digits) {
//     const result = [];

//     function permute(arr, start) {
//         if (start === arr.length - 1) {
//             result.push([...arr]);
//             return;
//         }

//         for (let i = start; i < arr.length; i++) {
//             [arr[start], arr[i]] = [arr[i], arr[start]];
//             permute(arr, start + 1);
//             [arr[start], arr[i]] = [arr[i], arr[start]]; 
//         }
//     }

//     permute(digits, 0);
//     return result.map((perm) => perm.join(""));
// }

// function isValidTime(time) {
//     const [hours, minutes] = time.split(":");
//     return hours >= "00" && hours <= "23" && minutes >= "00" && minutes <= "59";
// }

// console.log(latestClock(1, 9, 8, 3)); 
// console.log(latestClock(9, 1, 2, 5)); 




/////Another method


// function latestClock(a, b, c, d) {
//     const times = [
//       `${a}${b}:${c}${d}`,
//       `${a}${b}:${d}${c}`,
//       `${a}${c}:${b}${d}`,
//       `${a}${c}:${d}${b}`,
//       `${a}${d}:${b}${c}`,
//       `${a}${d}:${c}${b}`,
//       `${b}${a}:${c}${d}`,
//       `${b}${a}:${d}${c}`,
//       `${b}${c}:${a}${d}`,
//       `${b}${c}:${d}${a}`,
//       `${b}${d}:${a}${c}`,
//       `${b}${d}:${c}${a}`,
//       `${c}${a}:${b}${d}`,
//       `${c}${a}:${d}${b}`,
//       `${c}${b}:${a}${d}`,
//       `${c}${b}:${d}${a}`,
//       `${c}${d}:${a}${b}`,
//       `${c}${d}:${b}${a}`,
//       `${d}${a}:${b}${c}`,
//       `${d}${a}:${c}${b}`,
//       `${d}${b}:${a}${c}`,
//       `${d}${b}:${c}${a}`,
//       `${d}${c}:${a}${b}`,
//       `${d}${c}:${b}${a}`,
//     ];
//     const time = times.filter(el => {
//       const test = el.split(":")
//       if (test[0] >= 24) return false
//       if (test[1] >= 60) return false
//       return true
//     })
//     time.sort((a, b) =>  (b.split(":")[0] - a.split(":")[0] || b.split(":")[1] - a.split(":")[1]))
//     return time[0]
//   }

//   console.log(latestClock(1, 9, 8, 3)); 



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////


// function additionWithoutCarrying(a, b) {
//   let result = 0;
//   let multiplier = 1;

//   while (a > 0 || b > 0) {
//     result += ((a % 10 + b % 10) % 10) * multiplier;
//     a = Math.floor(a / 10);
//     b = Math.floor(b / 10);
//     multiplier *= 10;
//   }

//   return result;
// }

// // Example usage:
// const a = 456;
// const b = 1734;
// const result = additionWithoutCarrying(a, b);
// console.log(result); // Output: 1180



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// sum of cubes


// function sumCubes(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += Math.pow(i, 3);
//   }

//   return sum;
// }

// console.log(sumCubes(2)); 
// console.log(sumCubes(3)); 



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///Count by X

// function countBy(x, n) {
//   let z = [];

//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }

//   return z;
// }

// console.log(countBy(1, 10)); 
// console.log(countBy(2, 5));  



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// function correctTail(body, tail) {
//   // Get the substring of the body from the end, with a length equal to the tail's length
//   const sub = body.substr(body.length - tail.length);

//   // Check if the substring is equal to the tail
//   if (sub === tail) {
//       return true;
//   } else {
//       return false;
//   }
// }

// // Example usage:
// const isTailCorrect = correctTail("abc", "c");
// console.log(isTailCorrect); // Output: true




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function makeNegative(number) {
//   // Check if the number is greater than 0
//   if (number > 0) {
//       // Make the number negative
//       return -number;
//   } else {
//       // If the number is already negative or zero, return as is
//       return number;
//   }
// }

// // Examples:
// console.log(makeNegative(1));     // Output: -1
// console.log(makeNegative(-5));    // Output: -5
// console.log(makeNegative(0));     // Output: 0
// console.log(makeNegative(0.12));  // Output: -0.12



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//substring



// function nthChar(words) {
//   // Use the map function to extract the nth letter from each word
//   // and then join the resulting array of letters into a single string
//   return words.map((word, index) => word.charAt(index)).join('');
// }

// // Example usage:
// const result = nthChar(["yoda", "best", "has"]);
// console.log(result); // Output: "yes"



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Get the mean of an array

// function getAverage(marks) {
//   const sum = marks.reduce((acc, num) => acc + num, 0);

//   const average = sum / marks.length;

//   return Math.floor(average);
// }

// const grades = [85, 90, 92, 88, 95];
// const averageGrade = getAverage(grades);
// console.log(averageGrade); 




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Even or Odd - Which is Greater?


// function evenOrOdd(str) {
//   const numbers = str.split('').map(Number);

//   const evenSum = numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
//   const oddSum = numbers.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);

//   if (evenSum > oddSum) {
//       return "Even is greater than Odd";
//   } else if (oddSum > evenSum) {
//       return "Odd is greater than Even";
//   } else {
//       return "Even and Odd are the same";
//   }
// }

// const result1 =evenOrOdd("13579");
// console.log(result1); 

// const result2 =evenOrOdd("24680");
// console.log(result2); 

// const result3 =evenOrOdd("123456");
// console.log(result3); 





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Sum of integer combinations


// function find(arr, n) {
//   // Helper function to find combinations recursively
//   function findCombinationsRec(startIndex, currentCombination, currentSum) {
//       let count = 0;

//       // Check if the current combination sums up to the target
//       if (currentSum === n) { 
//           count++;
//       }

//       // Continue generating combinations
//       for (let i = startIndex; i < arr.length; i++) {
//           // Include the current element in the combination
//           currentCombination.push(arr[i]);

//           // Recursively find combinations with the updated sum
//           count += findCombinationsRec(i, currentCombination, currentSum + arr[i]);

//           // Backtrack by removing the last element to explore other combinations
//           currentCombination.pop();
//       }

//       return count;
//   }

//   // Start the recursive process
//   return findCombinationsRec(0, [], 0);
// }

// // Example usage:
// const result = find([3, 6, 9, 12], 12);
// console.log(result); // Output: 5



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// function wallpaper(l, w, h) {
//     const rollWidth = 0.52;
//     const rollLength = 10;
//     const extraLengthPercentage = 15;

//     if (l * w * h === 0) {
//         return "zero";
//     }

//     const totalWallArea = 2 * (l + w) * h; 
//     const totalRollArea = rollWidth * rollLength * (1 + extraLengthPercentage / 100); 

//     const numberOfRolls = Math.ceil(totalWallArea / totalRollArea); 
//     if (numberOfRolls <= 20) {
//         return numbers[numberOfRolls];
//     } else {
//         return numberOfRolls.toString(); 
//     }
// }

// const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];


// console.log(wallpaper(4.0, 3.5, 3.0)); 
// console.log(wallpaper(0.0, 3.5, 3.0)); 




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function factory(x) {
//   return function(array) {
//       return array.map(function(element) {
//           return element * x;
//       });
//   };
// }

// var fives = factory(5);    
// var myArray = [1, 2, 3];
// var result = fives(myArray);

// console.log(result);




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Convert a Number to a String!


// function numberToString(num) {
//     return String(num);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sum of positive

// function  positiveSum(arr) {
//     const sum = arr.reduce((accumulator, currentValue) => {
//         if (currentValue > 0) {
//             return accumulator + currentValue;
//         } else {
//             return accumulator;
//         }
//     }, 0);

//     return sum;
// }

// const result =  positiveSum([1, -4, 7, 12]);
// console.log(result); 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// My head is at the wrong end!

function fixTheMeerkat(arr) {
    return [arr[2],arr[1],arr[0]]
}

const meerkatArray = ["tail", "body", "head"];
const fixedMeerkat = fixTheMeerkat(meerkatArray);
console.log(fixedMeerkat); 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Number of Rectangles in a Grid


// function numberOfRectangles(m, n) {
//     return (m * (m + 1) * n * (n + 1)) / 4;
// }

// console.log(countRectangles(3, 2)); 
// console.log(countRectangles(4, 4)); 




// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             return year % 400 === 0;
//         } else {
//             return true;
//         }
//     } else {
//         return false;
//     }
// }

// for (let year = 1600; year <= 4000; year++) {
//     console.log(`${year}: ${isLeapYear(year) ? 'Leap Year' : 'Not a Leap Year'}`);
// }


// function solve(arr) {

//     const unique = [];
//     const seen = {};

//     for (let i = arr.length - 1; i >= 0; i--) {
//         const currentElement = arr[i];
//         if (!seen[currentElement]) {
//             seen[currentElement] = true;
//             unique.unshift(currentElement);
//         }
//     }
//     return unique;
// }

// const y = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
// const x = solve(y);
// console.log(x); 



// function largest(n, array){

//     if(n >array.length){
//         console.log("error");
//         return;
//     }
//     array.sort((a,b)=> b-a)

//     const arr = array.slice(0,n);

//     return arr;
// }
// const arry = largest(2,[3,4,5,6,7,8,9])
// console.log(arry);


// function removeSmallest(numbers) {

//     if (numbers.length === 0) {
//     return[]
//   }

//     let sm =0;
//     for(let i=1;i<numbers.length;i++){
//       if(numbers[i]<numbers[sm]){
//               sm =i;
//       }
//     }
//     return numbers.slice(0,sm).concat(numbers.slice(sm + 1));
//   }


// const arary = removeSmallest(2,3,4,5,6,7,8,9)
// console.log(arary);



// function remainder(n, m){

//     if(m == 0){
//       return NaN;
//   }

//   const large = Math.max(n,m)
//   const small = Math.min(m,n)

//   const rem = large % small
//   return rem
// }

// const value = remainder(-596,0);
// console.log(value);



// function SumSquares(l){
//   let sum = 0;

//   for(let i=0;i<l.length;i++){
//     if (Array.isArray(l[i])){
//       sum += SumSquares(l[i])
//     }else{
//       sum += Math.pow(l[i],2)
//     }
//   }

//   return sum;
// }

// var l = [1,2,3]
// console.log(SumSquares(l)) == 14

// var l = [[1,2],3]
// console.log(SumSquares(l)) == 14

// var l = [[[[[[[[[1]]]]]]]]]
// console.log(SumSquares(l)) == 1

// var l = [10,[[10],10],[10]]
// console.log(SumSquares(l)) == 400



// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }

// var userName = "John";
// var greeting = greet(userName);
// console.log(greeting);



// function hello(name) {
//   if (!name || name.trim() === "") {
//       return "Hello, World!";
//   }
//   return "Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
// }


// const sumNested = arr => {
//   let sum = 0;

//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       sum += sumNested(item);
//     } else if (typeof item === 'number') {
//       sum += item;
//     }
//   });

//   return sum;
// };
// console.log(sumNested([1, [2, [3, [4]]]])); 



// function sameCase(a, b) {
//   if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
//       return -1;
//   }
//   if ((a.toLowerCase() === a && b.toLowerCase() === b) || (a.toUpperCase() === a && b.toUpperCase() === b)) {
//   return 1;
//   }
//   if ((a.toLowerCase() === a && b.toUpperCase() === b) || (a.toUpperCase() === a && b.toLowerCase() === b)) {
//   return 0;
//   }
// }

// //another method

// function sameCase(a, b) {
//   if ((a.toLowerCase() === a && b.toLowerCase() === b) || (a.toUpperCase() === a && b.toUpperCase() === b)) {
//   return 1;
//   }
//   if ((a.toLowerCase() === a && b.toUpperCase() === b) || (a.toUpperCase() === a && b.toLowerCase() === b)) {
//   return 0;
//   }else{
// return 0;
// }
// }

// console.log(sameCase('a', 'g')); 
// console.log(sameCase('A', 'C')); 
// console.log(sameCase('b', 'G')); 
// console.log(sameCase('B', 'g')); 
// console.log(sameCase('0', '?')); 



// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) {
//     return [];
//   }
//   let countPositives = 0;
//   let sumNegatives = 0;
//   for (let num of input) {
//     if (num > 0) {
//       countPositives++;
//     } else if (num < 0) {
//       sumNegatives += num;
//     }
//   }
//   return [countPositives, sumNegatives];
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));




// function toBinary(n) {
//     let binary = (n >>> 0).toString(2);

//     if (n < 0 && binary.length < 32) {
//         binary = '1'.repeat(32 - binary.length) + binary;
//     }

//     return binary;
// }

// console.log(toBinary(3));   
// console.log(toBinary(-3));  



// function group(arr) {
//     let map = {};
//     let grouped = [];

//     for (let num of arr) {
//         if (!map[num]) {
//             map[num] = [];
//         }
//         map[num].push(num);
//     }

//     for (let num of arr) {
//         if (map[num]) {
//             grouped.push(map[num]);
//             delete map[num];
//         }
//     }

//     return grouped;
// }

// console.log(group([3, 2, 6, 2, 1, 3])); 
// console.log(group([3, 2, 6, 2]));



// function solution(number) {
//     if (number < 0) {
//         return 0;
//     }

//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(solution(11));  


// function digitalRoot(n) {
//     // Convert the number to a string to easily iterate over its digits
//     let numStr = n.toString();

//     // Base case: If the number has only one digit, return it
//     if (numStr.length === 1) {
//         return n;
//     }

//     // Sum the digits of the number
//     let sum = 0;
//     for (let digit of numStr) {
//         sum += parseInt(digit, 10);
//     }

//     // Recursively compute the digital root of the sum
//     return digitalRoot(sum);
// }

// console.log(digitalRoot(6));     
// console.log(digitalRoot(16));     
// console.log(digitalRoot(942));    
// console.log(digitalRoot(132189)); 
// console.log(digitalRoot(493193)); 



// function highAndLow(numbers) {

//     let arr = numbers.split(' ').map(Number);

//     let max = Math.max(...arr);
//     let min = Math.min(...arr);

//     // Return the result as a string
//     return `${max} ${min}`;
// }

// console.log(highAndLow("1 2 3 4 5"));   
// console.log(highAndLow("1 2 -3 4 5"));   
// console.log(highAndLow("1 9 3 4 -5"));   


//swap values

// function swapArrayValues(arr) {
//     var temp = arr[0];
//     arr[0] = arr[1];
//     arr[1] = temp;
// }

// var arr = [1, 2];
// swapArrayValues(arr);
// console.log(arr); // Outputs: [2, 1]

// Template strings

// var templateStrings = function(noun, adjective) {
//     return `${noun} are ${adjective}` 
//   }

// console.log(templateStrings("Apples", "red"));



// function isIntArray(arr) {
//     if (!Array.isArray(arr)) {
//         return false;
//     }

//     for (let num of arr) {
//         if (typeof num !== 'number' || !Number.isInteger(num)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isIntArray([1, 2, 3]));
// console.log(isIntArray([1, 2, 3.0]));
// console.log(isIntArray([1, 2, 3.5]));
// console.log(isIntArray([]));
// console.log(isIntArray("not an array"));
// console.log(isIntArray({}));



//Log

// function logs(x,a,b) {
//     let result = Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
//     return result;
// }
// console.log(logs(10,100,1000)); 



// function squareDigits(num) {
//     const squared = String(num)
//       .split('')
//       .map(digit => Math.pow(Number(digit), 2))
//       .join('');

//     return Number(squared);
//   }

//   console.log(squareDigits(9119)); 
//   console.log(squareDigits(765));  


//Time convert
// function timeConvert(num) {
//   if (num <= 0) return "00:00";

//   let hours = Math.floor(num / 60);
//   let mins = num % 60;

//   hours = String(hours).padStart(2, '0');
//   mins = String(mins).padStart(2, '0');

//   return `${hours}:${mins}`;
// }

// console.log(timeConvert(78));


// function hammingWeight(x) {
//   let count = 0;

//   while (x !== 0) {
//     count += x & 1;
//     x >>>= 1;
//   }

//   return count;
// }

// console.log(hammingWeight(10));
// console.log(hammingWeight(21)); 


// var humanYearsCatYearsDogYears = function (humanYears) {
//   let catYears = 0;
//   let dogYears = 0;

//   if (humanYears === 1) {
//     // First year
//     catYears = 15;
//     dogYears = 15;
//   } else if (humanYears === 2) {
//     // Second year
//     catYears = 24; 
//     dogYears = 24; 
//   } else if (humanYears > 2) {
//     // First two years have different calculations
//     catYears = 24; 
//     dogYears = 24;

//     // Subsequent years
//     for (let i = 3; i <= humanYears; i++) {
//       catYears += 4;
//       dogYears += 5;
//     }
//   }

//   return [humanYears, catYears, dogYears];
// }

// const humanYears = 5;
// const [human, cat, dog] = humanYearsCatYearsDogYears(humanYears);
// console.log(`Human: ${human} years, Cat: ${cat} years, Dog: ${dog} years`);




// function triangle(row) {
//   // If the row has only one color, return that color
//   if (row.length === 1) {
//       return row;
//   }

//   // Helper function to determine the resulting color
//   function combineColors(a, b) {
//       if (a === b) return a;
//       if ((a === 'R' && b === 'G') || (a === 'G' && b === 'R')) return 'B';
//       if ((a === 'R' && b === 'B') || (a === 'B' && b === 'R')) return 'G';
//       if ((a === 'G' && b === 'B') || (a === 'B' && b === 'G')) return 'R';
//   }

//   let currentRow = row.split('');
//   // Continue merging colors until the triangle color is obtained
//   while (currentRow.length > 1) {
//       let nextRow = [];
//       for (let i = 0; i < currentRow.length - 1; i++) {
//           nextRow.push(combineColors(currentRow[i], currentRow[i + 1]));
//       }
//       currentRow = nextRow;
//   }

//   return currentRow[0];
// }

// console.log(triangle('RRGBRGBB'));  
// console.log(triangle('RGB'));       
// console.log(triangle('R'));         


// function removeLowercaseVowels(str) {
//   return str.replace(/[aeiou]/g, '');
// }



// function betterThanAverage(classPoints, yourPoints) {
//   let totalPoints = classPoints.reduce((acc, curr) => acc + curr, 0) + yourPoints;

//   let average = totalPoints / (classPoints.length + 1); 
//   return yourPoints > average;
// }

// const classScores = [70, 80, 90];
// const yourScore = 85;
// console.log(betterThanAverage(classScores, yourScore)); 


// function mxdiflg(a1, a2) {
//   if (a1.length === 0 || a2.length === 0) return -1;

//   let maxDiff = -1;

//   for (let x of a1) {
//     for (let y of a2) {
//       const diff = Math.abs(x.length - y.length);
//       if (diff > maxDiff) {
//         maxDiff = diff;
//       }
//     }
//   }

//   return maxDiff; 
// }

// const a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
// const a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
// console.log(mxdiflg(a1, a2)); 


//number from string

// function getNumberFromString(s) {
//   const cleanedString = s.replace(/\D/g, '');
//   const number = parseInt(cleanedString, 10);
//   return number;
// }

// const inputString = "hell5o wor6ld";
// const result = getNumberFromString(inputString);
// console.log(result); 




// function isTriangle(a, b, c) {
//   if (a <= 0 || b <= 0 || c <= 0) {
//       return false;
//   }

//   // Check the Triangle Inequality Theorem
//   if (a + b <= c || a + c <= b || b + c <= a) {
//       return false;
//   }

//   return true;

// }

// console.log(isTriangle(1, 2, 2));  
// console.log(isTriangle(4, 2, 3));  
// console.log(isTriangle(2, 2, 2));   
// console.log(isTriangle(1, 2, 3));   
// console.log(isTriangle(-5, 1, 3));  
// console.log(isTriangle(0, 2, 3));   
// console.log(isTriangle(1, 2, 9)); 


// length of sequence

// var lengthOfSequence = function (arr, n) {
//     var firstIndex = arr.indexOf(n);
//     var secondIndex = arr.lastIndexOf(n);

//     if (firstIndex === -1 || firstIndex === secondIndex) {   //Attempt error
//         return 0;
//     }

//     return secondIndex - firstIndex + 1;
// };

// console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)); 



// function longer(s) {
//     const words = s.split(' ');

//     words.sort((a, b) => {
//         if (a.length !== b.length) {
//             return a.length - b.length;
//         }
//         return a.localeCompare(b, 'en', { sensitivity: 'case', caseFirst: 'upper' });
//     });
//     return words.join(' ');
// }
// console.log(longer("Another Green World"));
// console.log(longer("Darkness on the edge of Town"));
// console.log(longer("Have you ever Seen the Rain"));
// console.log(longer("hello Hello")); 

///////////////////////////////////////////////////////////////////////

// function longer(s) {
//   const words = s.split(' ');

//   words.sort((a, b) => {
//     if (a.length === b.length) {
//       return a < b ? -1 : 1; 
//     }
//     return a.length - b.length;
//   });
//   return words.join(' ');
// }

// console.log(longer("Another Green World")); 
// console.log(longer("Darkness on the edge of Town")); 
// console.log(longer("Have you ever Seen the Rain")); 
// console.log(longer("hello Hello")); 

//Double Char 

// function doubleChar(str) {
//     return str.split('').map(char => char+char).join('')
//   }

//   console.log(doubleChar("String"));
//   console.log(doubleChar("Hello World"));
//   console.log(doubleChar("1234!_"));


///////////////////////////////////////////////////////////////////////


// function twoDecimalPlaces(number) {
//     let multiplier = Math.pow(10, 2);
//     let num = Math.trunc(number * multiplier) / multiplier
//     return num;
// }
// console.log(twoDecimalPlaces(32.8493));
// console.log(twoDecimalPlaces(14.3286));
// console.log(twoDecimalPlaces(-7488.83485834983));


/////////////////////////////////////////////////////////////////////////

// function magicSum(numbers) {

//     let sum = 0;
//     for(let num of numbers){

//         let strNum = num.toString();

//         if(num % 2 !==0 && strNum.includes('3')){
//             sum+=num;
//         }
//     }
//     return sum;
//   }

//   console.log(magicSum([3, 12, 5, 8, 30, 13]));


//////////////////////////////////////////////////////////////////////////

// function maximumProductOfParts(number){

//   const str = String(number);
//   let maxProduct = -Infinity;

//   for(let i = 1; i < str.length - 1; i++){
//       for(let j = i + 1 ;j < str.length;j++){
//           const p1 = Number(str.substring(0,i));
//           const p2 = Number(str.substring(i,j));
//           const p3 = Number(str.substring(j));

//           const product = p1*p2*p3;

//           maxProduct = Math.max(maxProduct,product)
//       }
//   }
//   return maxProduct;
// }

// console.log(maximumProductOfParts(1234));
// console.log(maximumProductOfParts(8675309));

///////////////////////////////////////////////////////////////////////////////

// Convert a array of numbers into reverse

// function digitize(n) {
//   const array =  String(n).split("").reverse();
//   return array.map(Number);
// }

// console.log(digitize(12345));
// console.log(digitize(0));



///////////////////////////////////////////////////////////////////////////////


//Averages of numbers


// function averages(numbers) {
//    if (!numbers || numbers.length <= 1) {
//         return [];
//      }  

//      let result= [];
//      for(let i=0;i<numbers.length -1;i++){
//       let avg = (numbers[i] + numbers [i+1])/2;
//       result.push(avg);
//      }
//      return result;
// }

// console.log(averages([ 1, 3, 5, 1, -10]));


/////////////////////////////////////////////////////////////////////////////////////
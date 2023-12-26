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

function swapArrayValues(arr) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

var arr = [1, 2];
swapArrayValues(arr);
console.log(arr); // Outputs: [2, 1]

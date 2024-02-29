// function twosDifference(input) {
//     input.sort((a, b) => a - b);

//     const result = [];

//     for (let i = 0; i < input.length - 1; i++) {
//         if (input[i + 1] - input[i] === 2) {
//             result.push([input[i], input[i + 1]]);
//         }
//     }

//     return result;
// }

// console.log(twosDifference([1, 2, 3, 4]));    
// console.log(twosDifference([4, 1, 2, 3]));    
// console.log(twosDifference([1, 23, 3, 4, 7])); 
// console.log(twosDifference([4, 3, 1, 5, 6]));  


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function flickSwitch(arr) {
//     let switchFlag = true;

//     return arr.map(element => {
//         if (element === 'flick') {
//             switchFlag = !switchFlag;
//             return switchFlag;
//         } else {
//             return switchFlag;
//         }
//     });
// }

// console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])); 
// console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine'])); 
// console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])); 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Find the Mine!


// function mineLocation(field) {
//     for (let i = 0; i < field.length; i++) {
//         for (let j = 0; j < field[i].length; j++) {
//             if (field[i][j] === 1) {
//                 return [i, j];
//             }
//         }
//     }
// }


// console.log(mineLocation([[1, 0, 0], [0, 0, 0], [0, 0, 0]]))
// console.log(mineLocation([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
// console.log(mineLocation([[0, 0, 0], [0, 0, 0], [0, 1, 0]])) 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function twistedSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         let num = i;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }
//     }
//     return sum;
// }


// console.log(twistedSum(4));  
// console.log(twistedSum(10)); 
// console.log(twistedSum(12)); 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// function howMuchILoveYou(nbpetals) {
//     const phrases = [
//         "I love you",
//         "a little",
//         "a lot",
//         "passionately",
//         "madly",
//         "not at all"
//     ];

//     const lastIndex = (nbpetals - 1) % phrases.length;

//     return phrases[lastIndex];
// }

// console.log(howMuchILoveYou(4)); 
// console.log(howMuchILoveYou(8)); 
// console.log(howMuchILoveYou(12)); 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function well(x) {
//     const goodIdeasCount = x.filter(idea => idea === 'good').length;

//     if (goodIdeasCount === 1 || goodIdeasCount === 2) {
//         return 'Publish!';
//     } else if (goodIdeasCount > 2) {
//         return 'I smell a series!';
//     } else {
//         return 'Fail!';
//     }
// }

// console.log(well(['good', 'bad', 'good'])); 
// console.log(well(['good', 'bad', 'good', 'good']));
// console.log(well(['bad', 'bad', 'bad'])); 




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function findShort(s) {
//     // Split the string into an array of words
//     const words = s.split(' ');

//     // Find the length of the shortest word
//     const shortestLength = Math.min(...words.map(word => word.length));

//     return shortestLength;
// }

// const inputString = "This is a simple example";
// const result = findShort(inputString);
// console.log(result);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function countSheeps(sheeps) {
//     if (!sheeps || !Array.isArray(sheeps)) {
//         return "Invalid input";
//     }
//     const sheepCount = sheeps.filter(Boolean).length;

//     return sheepCount;
// }


// const sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
// const result = countSheeps(sheepArray);
// console.log(result);





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\



// function findMultiples(integer, limit) {
//     let multiplesList = [];

//     for (let i = integer; i <= limit; i += integer) {
//         multiplesList.push(i);
//     }

//     return multiplesList;
// }

// const result = findMultiples(2, 6);
// console.log(result); 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\




// function amountOfPages(summary) {
//     let currentPage = 1;
//     let currentSummary = 0;

//     while (currentSummary < summary) {
//         const currentNumberString = currentPage.toString();
//         currentSummary += currentNumberString.length;
//         currentPage++;
//     }

//     return currentPage - 1;
// }


// const result = amountOfPages(25);
// console.log(result); 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\



// var summation = function (num) {
//     let sum = 0;
  
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//       return sum;
//   };

//   const result = summation(5);
//   console.log(result); 
  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\


  // function getBestWord(points, words) {
  //   let maxScore = 0;
  //   let bestIndex = 0;
  
  //   for (let i = 0; i < words.length; i++) {
  //     let word = words[i];
  //     let score = calculateScore(points, word);
  
  //     if (score > maxScore || (score === maxScore && word.length < words[bestIndex].length)) {
  //       maxScore = score;
  //       bestIndex = i;
  //     }
  //   }
  
  //   return bestIndex;
  // }
  
  // function calculateScore(points, word) {
  //   let score = 0;
  //   for (let i = 0; i < word.length; i++) {
  //     let letter = word[i];
  //     let index = letter.charCodeAt(0) - 'A'.charCodeAt(0);
  //     score += points[index];
  //   }
  //   return score;
  // }
  
  // // Example usage:
  // const points = [1, 3, 1, 1, 4, 1, 3, 2, 1, 10, 1, 1, 4, 1, 1, 3, 8, 1, 1, 1, 1, 4, 4, 10, 10];
  // const words = ["CAT", "BAT", "RAT", "ART", "CAR"];
  // const result = getBestWord(points, words);
  // console.log(result); // Output: 3 (Index of the word "ART" which has the highest score and shortest length)
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\


// function learnCharitableGame(arr) {
// // Check if the array is not empty
// if (arr.length === 0) {
//   return false;
// }

// // Calculate the initial amount assuming all players started with the same amount
// const initialAmount = arr.reduce((sum, amount) => sum + amount, 0) / arr.length;

// // Check if the initial amount is a positive integer
// if (initialAmount <= 0 || initialAmount % 1 !== 0) {
//   return false;
// }

// // Check if the end-state amounts are consistent with the initial amount
// for (const amount of arr) {
//   if ((amount - initialAmount) % arr.length !== 0 || amount - initialAmount < 0) {
//     return false;
//   }
// }

// return true;
// }



// // Examples
// console.log(learnCharitableGame([0, 56, 100])); // true
// console.log(learnCharitableGame([0, 0, 0]));    // false
// console.log(learnCharitableGame([11]));          // true
// console.log(learnCharitableGame([100, 100, 100, 90, 1, 0, 0])); // false


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\

// function longestPalindrome(str) {
//  // Filter out non-alphanumeric characters and convert the string to lowercase for case-insensitivity
//  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//  // Count the frequency of each character
//  const charFrequency = {};
//  for (const char of str) {
//    charFrequency[char] = (charFrequency[char] || 0) + 1;
//  }

//  let length = 0;
//  let hasOddFrequency = false;

//  // Iterate through the character frequencies
//  for (const frequency of Object.values(charFrequency)) {
//    length += Math.floor(frequency / 2) * 2; // Sum up even frequencies
//    if (frequency % 2 === 1) {
//      hasOddFrequency = true;
//    }
//  }

//  // Add one if there is at least one character with an odd frequency
//  if (hasOddFrequency) {
//    length += 1;
//  }

//  return length;
// }

// // Examples
// console.log(longestPalindrome("Hannah"));       // 6
// console.log(longestPalindrome("aabbcc_yYx_"));  // 9


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\



function addLetters(...letters) {
  if (letters.length === 0) {
    return 'z';
  }

  // Convert letters to numerical values
  const values = letters.map(letter => letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1);

  // Calculate the sum and handle overflow
  const sum = values.reduce((acc, val) => acc + val, 0) % 26;

  // Convert back to a letter
  const result = String.fromCharCode('a'.charCodeAt(0) + (sum === 0 ? 25 : sum - 1));

  return result;
}

// Examples
console.log(addLetters('a', 'b', 'c')); // 'f'
console.log(addLetters('a', 'b')); // 'c'
console.log(addLetters('z')); // 'z'
console.log(addLetters('z', 'a')); // 'a'
console.log(addLetters('y', 'c', 'b')); // 'd'
console.log(addLetters()); // 'z'

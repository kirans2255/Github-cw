// function toCsvText(array) {
//     return array.map(row => row.join(',')).join('\n');
// }

// // Example usage:
// const inputArray = [
//     [0, 1, 2, 3, 4],
//     [10, 11, 12, 13, 14],
//     [20, 21, 22, 23, 24],
//     [30, 31, 32, 33, 34]
// ];

// const csvRepresentation = toCsvText(inputArray);
// console.log(csvRepresentation);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function solve(arr) {
//     const frequencyMap = {};
//     arr.forEach(element => {
//         frequencyMap[element] = (frequencyMap[element] || 0) + 1;
//     });

//     function customSort(a, b) {
//         const frequencyDiff = frequencyMap[b] - frequencyMap[a];
//         if (frequencyDiff !== 0) {
//             return frequencyDiff; 
//         } else {
//             return a - b; 
//         }
//     }

//     return arr.sort(customSort);
// }

// // Example usage:
// const result = solve([2, 3, 5, 3, 7, 9, 5, 3, 7]);
// console.log(result);  // Output: [3, 3, 3, 5, 5, 7, 7, 2, 9]




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// function totalLicks(env) {
//     const baseLicks = 252;
//     let totalLicks = baseLicks;

//     let mostChallengingCondition = null;
//     let maxIncrease = 0;

//     for (const condition in env) {
//       if (env.hasOwnProperty(condition)) {
//         const conditionValue = env[condition];
//         totalLicks += conditionValue;

//         if (conditionValue > maxIncrease) {
//           maxIncrease = conditionValue;
//           mostChallengingCondition = condition;
//         }
//       }
//     }

//     let output = `It took ${totalLicks} licks to get to the tootsie roll center of a tootsie pop.`;

//     if (mostChallengingCondition !== null) {
//       output += ` The toughest challenge was ${mostChallengingCondition}.`;
//     }

//     return output;
//   }

//   // Example usage:
//   const env1 = {
//     freezingTemps: 30,
//   };
//   console.log(totalLicks(env1));

//   const env2 = {
//     sunnyDay: -20,
//   };
//   console.log(totalLicks(env2));

//   const env3 = {};
//   console.log(totalLicks(env3));

//   const env4 = {
//     evilWizards: 260,
//   };
//   console.log(totalLicks(env4));

//   const env5 = {
//     noChallenges: 2,
//   };
//   console.log(totalLicks(env5));



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function yearDays(year) {
//     const isLeapYear =
//       (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

//     return `${year} has ${isLeapYear ? 366 : 365} days`;
//   }

//   console.log(yearDays(2000));  
//   console.log(yearDays(0));     
//   console.log(yearDays(-64));  
//   console.log(yearDays(2016));  
//   console.log(yearDays(1974));  
//   console.log(yearDays(-10));  
//   console.log(yearDays(666));   



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function deleteNth(arr, n) {
//   let countMap = {};

//   return arr.filter((num) => {
//     countMap[num] = (countMap[num] || 0) + 1;

//     if (countMap[num] <= n) {
//       return true;
//     }

//     return false;
//   });
// }

// // Examples
// console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));
// // Output: [1, 2, 3, 1, 2]

// console.log(deleteNth([20, 37, 20, 21], 1));
// // Output: [20, 37, 21]


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function inAscOrder(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false; // If any adjacent pair violates the condition, return false
//     }
//   }
//   return true; // If the loop completes without returning false, the array is in ascending order
// }

// console.log(inAscOrder([1, 2, 4, 7, 19]));
// console.log(inAscOrder([1, 2, 3, 4, 5]));
// console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
// console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]));



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function gimmeTheLetters(sp) {
//   // Split the sp string into two letters
//   const [start, end] = sp.split('-');

//   // Get the character codes of the start and end letters
//   const startCode = start.charCodeAt(0);
//   const endCode = end.charCodeAt(0);

//   // Generate an array of character codes in the specified range
//   const charCodes = Array.from({ length: endCode - startCode + 1 }, (_, index) => startCode + index);

//   // Convert the character codes back to characters and join them into a string
//   const result = String.fromCharCode(...charCodes);

//   return result;
// }

// // Test cases
// console.log(gimmeTheLetters("a-z")); 
// console.log(gimmeTheLetters("h-o")); 
// console.log(gimmeTheLetters("Q-Z")); 
// console.log(gimmeTheLetters("J-J")); 



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function combineNames(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// // Test case
// console.log(combineNames('James', 'Stevens')); 



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function stonePick(arr) {
//     // Initialize counts for sticks and cobblestones
//     let stickCount = 0;
//     let cobblestoneCount = 0;

//     // Iterate through the array and count sticks and cobblestones
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "Sticks") {
//             stickCount++;
//         } else if (arr[i] === "Cobblestone") {
//             cobblestoneCount++;
//         } else if (arr[i] === "Wood") {
//             // Convert wood to sticks (1 wood = 4 sticks)
//             stickCount += 4;
//         }
//     }

//     // Calculate the maximum number of stone pickaxes that can be crafted
//     const maxPickaxes = Math.min(Math.floor(stickCount / 2), Math.floor(cobblestoneCount / 3));

//     return maxPickaxes;
// }

// // Example usage:
// const exampleArray = ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"];
// const result = stonePick(exampleArray);
// console.log(result);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function count(string) {
//     const charCount = {};
//     for (let char of string) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     return charCount;
// }

// // Example usage:
// const result = count("aba");
// console.log(result);

// const emptyResult = count("");
// console.log(emptyResult); 



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function reverseMiddle(array) {
    if (array.length < 4) {
        throw new Error("Input list must contain at least four elements.");
    }

    const middleIndex = Math.floor(array.length / 2);
    let reversedMiddle = [];

    if (array.length % 2 === 0) { 
        reversedMiddle.push(array[middleIndex]);
        reversedMiddle.push(array[middleIndex - 1]);
    } else {
        reversedMiddle.push(array[middleIndex + 1]);
        reversedMiddle.push(array[middleIndex ]);
        reversedMiddle.push(array[middleIndex - 2]);
    }

    return reversedMiddle;
}

const myList = [1, 2, 3, 4, 5, 6];
console.log(reverseMiddle(myList)); 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function validateNumber(str) {
    // Remove dashes and whitespace from the number
    const cleanedNumber = str.replace(/[-\s]/g, '');

    // Define regular expressions for valid phone number patterns
    const regEx1 = /^07\d{9}$/; // Begins with '07' followed by 9 digits
    const regEx2 = /^\+447\d{9}$/; // Begins with '+447' followed by 9 digits

    // Check if the cleaned number matches any of the valid patterns
    if (regEx1.test(cleanedNumber) || regEx2.test(cleanedNumber)) {
        return 'In with a chance';
    } else {
        return 'Plenty more fish in the sea';
    }
}

// Example usage:
console.log(validateNumber('07454876120')); // Output: In with a chance
console.log(validateNumber('+447454876120')); 
console.log(validateNumber('+44--745---487-6120')); 
console.log(validateNumber('-074-54-87-61-20-'));
console.log(validateNumber('123456789')); // Output: Plenty more fish in the sea
console.log(validateNumber('')); // Output: Plenty more fish in the sea




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function pagesNumberingWithInk(current, numberOfDigits) {
    let remainingDigits = numberOfDigits;
    let nextPage = current;

    while (remainingDigits >= nextPage.toString().length) {
        remainingDigits -= nextPage.toString().length;
        nextPage++;
    }

    return nextPage - 1;
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5)); 
console.log(pagesNumberingWithInk(8, 4)); 




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

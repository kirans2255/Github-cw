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


function yearDays(year) {
    const isLeapYear =
      (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
    return `${year} has ${isLeapYear ? 366 : 365} days`;
  }
  
  console.log(yearDays(2000));  
  console.log(yearDays(0));     
  console.log(yearDays(-64));  
  console.log(yearDays(2016));  
  console.log(yearDays(1974));  
  console.log(yearDays(-10));  
  console.log(yearDays(666));   
  


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

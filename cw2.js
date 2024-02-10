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


function mineLocation(field) {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 1) {
                return [i, j];
            }
        }
    }
}


console.log(mineLocation([[1, 0, 0], [0, 0, 0], [0, 0, 0]]))
console.log(mineLocation([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
console.log(mineLocation([[0, 0, 0], [0, 0, 0], [0, 1, 0]])) 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function twistedSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
    }
    return sum;
}


console.log(twistedSum(4));  
console.log(twistedSum(10)); 
console.log(twistedSum(12)); 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

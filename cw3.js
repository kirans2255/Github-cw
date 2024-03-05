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


function solve(arr) {
    const frequencyMap = {};
    arr.forEach(element => {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });

    function customSort(a, b) {
        const frequencyDiff = frequencyMap[b] - frequencyMap[a];
        if (frequencyDiff !== 0) {
            return frequencyDiff; 
        } else {
            return a - b; 
        }
    }

    return arr.sort(customSort);
}

// Example usage:
const result = solve([2, 3, 5, 3, 7, 9, 5, 3, 7]);
console.log(result);  // Output: [3, 3, 3, 5, 5, 7, 7, 2, 9]

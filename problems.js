// Find common elements in 3 sorted array 

// Input: 
// ar1[] = {1, 5, 10, 20, 40, 80} 
// ar2[] = {6, 7, 20, 80, 100} 
// ar3[] = {3, 4, 15, 20, 30, 70, 80, 120} 
// Output: 20, 80


// ANS

const ar1 = [1,5,10,20,40,80]
const ar2 = [6,7,20,80,100]
const ar3 = [3,4,15,20,30,70,80,120]

const arr = ar1.filter(value => ar2.includes(value) && ar3.includes(value))

console.log(arr)



//Give two strings, return true if they are anagrams of one another.
// eg:- Heart  -  Earth
// Silent  - Listen


//ANS:

function areAnagrams(str1, str2) {
    function cleanString(str) {
        return str.toLowerCase()            
                  .split('')                
                  .sort()                   
                  .join('');                
    }

    return cleanString(str1) === cleanString(str2);
}

console.log(areAnagrams("Heart", "Earth")); // true

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


function latestClock(a, b, c, d) {
    const times = [
      `${a}${b}:${c}${d}`,
      `${a}${b}:${d}${c}`,
      `${a}${c}:${b}${d}`,
      `${a}${c}:${d}${b}`,
      `${a}${d}:${b}${c}`,
      `${a}${d}:${c}${b}`,
      `${b}${a}:${c}${d}`,
      `${b}${a}:${d}${c}`,
      `${b}${c}:${a}${d}`,
      `${b}${c}:${d}${a}`,
      `${b}${d}:${a}${c}`,
      `${b}${d}:${c}${a}`,
      `${c}${a}:${b}${d}`,
      `${c}${a}:${d}${b}`,
      `${c}${b}:${a}${d}`,
      `${c}${b}:${d}${a}`,
      `${c}${d}:${a}${b}`,
      `${c}${d}:${b}${a}`,
      `${d}${a}:${b}${c}`,
      `${d}${a}:${c}${b}`,
      `${d}${b}:${a}${c}`,
      `${d}${b}:${c}${a}`,
      `${d}${c}:${a}${b}`,
      `${d}${c}:${b}${a}`,
    ];
    const time = times.filter(el => {
      const test = el.split(":")
      if (test[0] >= 24) return false
      if (test[1] >= 60) return false
      return true
    })
    time.sort((a, b) =>  (b.split(":")[0] - a.split(":")[0] || b.split(":")[1] - a.split(":")[1]))
    return time[0]
  }

  console.log(latestClock(1, 9, 8, 3)); 
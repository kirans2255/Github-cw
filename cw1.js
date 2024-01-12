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


function sayHello(name, city, state) {
    const names = name.join(' ');
    const world = `Hello, ${names}! Welcome to ${city}, ${state}!`;
    return world;
  }
  
  const names = ['John', 'Smith'];
  const city = 'Phoenix';
  const state = 'Arizona';
  
  const world = sayHello(names, city, state);
  console.log(world);
  
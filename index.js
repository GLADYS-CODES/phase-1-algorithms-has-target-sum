function hasTargetSum(array, target) {
  
  
  // Write your algorithm here
  const listedNumbers ={};

  for (const number of array) {
    // showing n

    const answer = target - number;

    if (answer in listedNumbers)
    return true
    listedNumbers[number] - true;
  }
  return false;
}

//Runtime: O(n^2)
// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const answer = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === answer) return true;
//     }
//   }

//   return false;
// }

// O(n) runtime
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

// O(1) runtime
function findSock(object) {
  if (object.sock) return "sock";
}

/* 
  Write the Big O time complexity of your function here
//Runtime: O(n^2)
//Space: O(n)
*/


  // Add your pseudocode here
function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}


// hasTargetSum([8, 12, 4, 3],20)
// listedNumbers = {
//   1: true,
//   2: true,
//   3: true
 
/*
  Add written explanation of your solution here
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");
// Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");
// Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

console.log("");

// Multiple pairs?
console.log("Expecting: true");
console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

console.log("");
  
}

module.exports = hasTargetSum;

function hasTargetSum(array, target) {
  // iterate over the array of no.
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify a complementary no.that adds to our target
    // (eg: if our no. is 2, and the target is 5, the complementary no. is 3)
    const complement = target - array[i];
    // iterate over the remaining no.s in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining no.s is the complement
      // if so, return true
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false
  return false;
}


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


//OR


function hasTargetSum(array, target) {
  // create an object to keep track of all the no.s we've seen
  const seenNumbers = {};
  // iterate over the array of no.s
  for (const number of array) {
    // for the current no, identify a complementary no that adds to our target
    // (for example: if our no is 2, and the target is 5, the complementary no is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current no
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current no as the key on our object so we can check it later against other no.s
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}
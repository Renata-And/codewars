// ❔DESCRIPTION

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// ☑️ SOLUTION

function findOdd(array) {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    if (array[i] in obj) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }

  let key;
  array.forEach((element) => {
    if (obj[element] % 2 !== 0) {
      key = Object.keys(obj).find((k) => obj[k] === obj[element]);
    }
  });

  return +key;
}

console.log(findOdd([7])); //7
console.log(findOdd([0])); //0)
console.log(findOdd([1, 1, 2])); //2
console.log(findOdd([0, 1, 0, 1, 0])); //0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4

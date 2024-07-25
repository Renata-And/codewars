// ❔DESCRIPTION

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Your function should only return a number, not the explanation about how you get that number.

// ☑️ SOLUTION

function getSum(a, b) {
  let sum = 0;

  if (a === b) return a;

  if (a < b) {
    while (a <= b) {
      sum += a;
      a++;
    }
  } else if (b < a) {
    while (b <= a) {
      sum += b;
      b++;
    }
  }

  return sum;
}

console.log(getSum(2, 4)); // 2 + 3 + 4 = 9
console.log(getSum(-2, 3)); // -2 + -1 + 0 + 1 + 2 + 3 = 3
console.log(getSum(4, 1)); // 1 + 2 + 3 + 4 = 10

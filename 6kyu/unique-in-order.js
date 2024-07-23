// ❔DESCRIPTION
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// ☑️ SOLUTION

let uniqueInOrder = function (iterable) {
  const newArray = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      newArray.push(iterable[i]);
    }
  }
  return newArray;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

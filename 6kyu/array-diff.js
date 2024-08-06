// ❔DESCRIPTION

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// ☑️ SOLUTION

function arrayDiff(a, b) {
  const array = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      array.push(a[i]);
    }
  }
  return array;
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
console.log(arrayDiff([1, 2, 2], [2]));

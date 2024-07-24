// ❔DESCRIPTION

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// ☑️ SOLUTION

function duplicateEncode(word) {
  const obj = {};
  const array = word.toLowerCase().split('');
  let str = '';

  for (let i = 0; i < array.length; i++) {
    if (array[i] in obj) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }

  array.forEach((element) => {
    if (obj[element] > 1) {
      str += ')';
    } else {
      str += '(';
    }
  });

  return str;
}

console.log(duplicateEncode('din')); // (((
console.log(duplicateEncode('recede')); // ()()()
console.log(duplicateEncode('Success')); // )())())
console.log(duplicateEncode('(( @')); // ))((

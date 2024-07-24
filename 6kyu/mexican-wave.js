// ❔DESCRIPTION

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// ☑️ SOLUTION

function wave(str) {
  const array = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      array.push(
        str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1)
      );
    }
  }

  return array;
}

console.log(wave('hello')); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave('two words')); // ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']

// ❔DESCRIPTION

// Create a method to see whether the string is ALL CAPS.

// ☑️ SOLUTION

// String.prototype.isUpperCase = function () {
//   return this.toUpperCase() === this.toString();
// };

// '#LOVEWins'.isUpperCase(); //false, '#LOVEWins is not upper case'
// '#LoveWINS'.isUpperCase(); //false, '#LoveWINS is not upper case'
// '#LOVEWINs'.isUpperCase(); //false, '#LOVEWINs is not upper case'
// '#lOVEWINS'.isUpperCase(); //false, '#lOVEWINS is not upper case'

String.prototype.toAlternatingCase = function () {
  let str = '';
  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase()) {
      str += this[i].toUpperCase();
    } else {
      str += this[i].toLowerCase();
    }
  }
  return str;
};

console.log('heLLo world'.toAlternatingCase()); // "HELLO WORLD"

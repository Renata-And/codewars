// ❔DESCRIPTION

// Create a method to see whether the string is ALL CAPS.

// ☑️ SOLUTION

String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
};

'#LOVEWins'.isUpperCase(); //false, '#LOVEWins is not upper case'
'#LoveWINS'.isUpperCase(); //false, '#LoveWINS is not upper case'
'#LOVEWINs'.isUpperCase(); //false, '#LOVEWINs is not upper case'
'#lOVEWINS'.isUpperCase(); //false, '#lOVEWINS is not upper case'

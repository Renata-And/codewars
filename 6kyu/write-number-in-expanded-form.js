// ❔DESCRIPTION
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// ☑️ SOLUTION
function expandedForm(num) {
  const arr = num.toString().split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '0') {
      newArr.push(`${arr[i]}${'0'.repeat(arr.length - i - 1)}`);
    }
  }
  return newArr.join(' + ');
}

//упрощенный код
function expandedForm(num) {
  return num
    .toString()
    .split('')
    .map((digit, i, arr) =>
      digit !== '0' ? digit + '0'.repeat(arr.length - i - 1) : ''
    )
    .filter(Boolean) // Убираем пустые строки
    .join(' + ');
}

console.log(expandedForm(9000000));
console.log(expandedForm(42));
console.log(expandedForm(70340));

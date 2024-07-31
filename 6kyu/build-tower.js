// ❔DESCRIPTION

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// ☑️ SOLUTION
function towerBuilder(nFloors) {
  const array = [];
  let str = '';
  let rep = nFloors - 1;

  for (let i = 1; rep >= 0; i = i + 2) {
    str = ' '.repeat(rep) + '*'.repeat(i) + ' '.repeat(rep);
    rep--;
    array.push(str);
  }

  return array;
}

console.log(towerBuilder(5));

// nFloors = 4;
// ' '.repeat(3) + '*'.repeat(1) + ' '.repeat(3);
// ' '.repeat(2) + '*'.repeat(3) + ' '.repeat(2);
// ' '.repeat(1) + '*'.repeat(5) + ' '.repeat(1);
// ' '.repeat(0) + '*'.repeat(7) + ' '.repeat(0);

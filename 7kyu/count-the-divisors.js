function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) {
        count++;
      }
    }
  }
  return count;
}

console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);

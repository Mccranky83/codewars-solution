const getSum = (n) => {
  let last = 1 + 2 * ([...Array(n)].reduce((acc, _, i) => acc + i + 1, 0) - 1);
  let output = 1;
  let sum = 0;
  while (output <= last) {
    sum += output;
    output += 2;
  }
  return sum;
};
const rowSumOddNumbers = (n) => getSum(n) - getSum(n - 1);
console.log(rowSumOddNumbers(42));

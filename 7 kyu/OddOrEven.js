const oddOrEven = (arr) =>
  Math.abs(arr.reduce((acc, cur) => acc + cur, 0)) % 2 ? "odd" : "even";
console.log(oddOrEven([]));

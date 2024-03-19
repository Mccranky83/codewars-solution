const isTriangle = (a, b, c) =>
  Array.from([a, b, c].sort((a, b) => a - b)).reduce((acc, cur, i) =>
    i - 2 ? acc + cur : acc - cur,
  ) > 0
    ? true
    : false;
console.log(isTriangle(10, 5, 2));

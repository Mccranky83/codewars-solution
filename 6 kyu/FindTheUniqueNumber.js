const findUniq = (arr) =>
  arr.sort()[0] === arr.sort()[1] ? arr.sort()[arr.length - 1] : arr[0];
console.log(findUniq([1, 1, 1, 2, 1, 1]));

const findEvenIndex = (arr) =>
  arr.findIndex(
    (_, i) =>
      arr.slice(0, i).reduce((acc, cur) => acc + cur, 0) ===
      arr.slice(i + 1).reduce((acc, cur) => acc + cur, 0),
  );
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

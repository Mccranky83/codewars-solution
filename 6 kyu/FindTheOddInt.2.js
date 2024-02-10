const findOdd = (A) => {
  let output;
  [...new Set(A)].forEach((t) => {
    A.filter((e) => e === t).length % 2 === 1 && (output = t);
  });
  return output;
};

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

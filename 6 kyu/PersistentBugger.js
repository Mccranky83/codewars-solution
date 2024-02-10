const persistence = (num, count = 0) => {
  let output = [...num.toString()].reduce((acc, cur) => acc * cur);
  console.log(output);
  num != output && count++;
  if (output < 10) return count;
  return persistence(output, count);
};
console.log(persistence(999));

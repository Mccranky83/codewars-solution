const persistence = (number) => {
  let count = 0;
  let output = Number(number);
  while (1) {
    if (output < 10) return count;
    count++;
    output = Number([...output.toString()].reduce((acc, cur) => acc * cur));
  }
};
console.log(persistence(39));

const squareDigits = (number) =>
  Number([...number.toString()].map((t) => t ** 2).join(""));
console.log(squareDigits(9119));

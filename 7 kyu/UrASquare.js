const isSquare = (n) =>
  Math.sqrt(n) !== Math.floor(Math.sqrt(n)) ? false : true;
console.log(isSquare(5));

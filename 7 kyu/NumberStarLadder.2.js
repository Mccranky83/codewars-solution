const pattern = (n) => {
  let arr = [];
  for (let i = n + 1; i > 1; i--) {
    arr.push(
      [...Array(i)]
        .fill(0)
        .map((_, i, arr) => (i == 0 ? 1 : i == arr.length - 1 ? i : "*"))
        .join("") + "\n",
    );
  }
  return arr.reverse().join("").slice(1, -1);
};

console.log(pattern(1));
console.log();
console.log(pattern(10));

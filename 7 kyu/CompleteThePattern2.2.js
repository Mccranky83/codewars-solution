const pattern = (n) => {
  if (n < 1) return "";
  let str = "",
    buffer = "";
  while (n) {
    buffer = (str += n) + (buffer ? "\n" : "") + buffer;
    n--;
  }
  return buffer;
};

process.stdin.on("data", (n) => {
  console.log(pattern(Number(n)));
});

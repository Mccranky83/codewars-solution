const accum = (s) =>
  s
    .toUpperCase()
    .split("")
    .map((t, i) => t + t.toLowerCase().repeat(i))
    .join("-");
console.log(accum("abcd"));

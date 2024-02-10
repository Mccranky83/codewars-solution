const incrementString = (str) =>
  str.replace(
    /([A-Za-z]+?|^)(\d+|$)$/g,
    (_, g1, g2) =>
      `${g1}${(Number(g2) + 1).toString().padStart(g2.length, "0") || 1}`,
  );

console.log(incrementString("foo001"));
console.log(incrementString("foo"));
console.log(incrementString("001"));
console.log(incrementString("1"));
console.log(incrementString("foo99bar100"));

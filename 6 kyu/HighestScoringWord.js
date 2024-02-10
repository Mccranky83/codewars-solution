const high = (x) => {
  let map = Object.fromEntries(
    [...Array(26)].map((_, i) => [String.fromCharCode(i + 97), i + 1]),
  );
  let arr = x
    .split(" ")
    .map((t) => [...t].reduce((acc, cur) => acc + map[cur], 0));
  return x.split(" ")[
    arr.indexOf(arr.reduce((acc, cur) => (cur > acc ? cur : acc)))
  ];
};
console.log(high("abcd aaa abc"));

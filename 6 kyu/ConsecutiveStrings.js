const longestConsec = (strarr, k) =>
  strarr.length >= k && k > 0
    ? strarr
        .map((_, i, self) =>
          self.slice(i, i + k).reduce((acc, cur) => acc + cur),
        )
        .slice(0, strarr.length - k + 1)
        .reduce((acc, cur) => (acc.length >= cur.length ? acc : cur))
    : "";

console.log(
  longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2),
);
console.log(longestConsec([], " "));

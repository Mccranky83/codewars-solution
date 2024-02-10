const longest = (s1, s2) =>
  s1
    .concat(s2)
    .replace(/(.)(?=.*\1)/g, "")
    .split("")
    .sort()
    .join("");

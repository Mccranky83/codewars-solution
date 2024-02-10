const isValidWalk = (walk) => {
  const helper = (a, b, c, d) => {
    let str = walk
      .sort()
      .join("")
      .replace(new RegExp(`${a}|${b}`, "g"), "");
    while (1) {
      let s = str.replace(new RegExp(`${c}${d}`, "g"), "");
      if (s == str) break;
      str = s;
    }
    return str;
  };
  let s1 = helper("e", "w", "n", "s");
  let s2 = helper("n", "s", "e", "w");
  return walk.length == 10 && !s1 && !s2;
};

console.log(isValidWalk(["n", "n", "w", "e", "n", "s", "n", "s", "n", "s"]));

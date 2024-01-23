const convertArr = (A) =>
  A.map((t) => (t < 0 ? String.fromCharCode(t) : String.fromCharCode(t * 100)));

const sort = (a) => [...a].sort((a, b) => a - b).join("");

const countNumbers = (A) => {
  let str = A.join("");
  let regex = /(.)(?=.*\1)/g;
  let charset = sort(str.replace(regex, ""));
  let obj = Object.fromEntries([...charset].map((t) => [t, 0]));

  while (1) {
    if (sort(str) === sort(charset)) {
      [...str].forEach((i) => obj[i]++);
      return obj;
    }
    let s = str.match(regex)?.join("");
    let cs = sort(s.replace(regex, ""));
    for (let i of charset) obj[i]++;
    charset = cs;
    str = s;
  }
};

const findOdd = (A) => {
  const arr = countNumbers(convertArr(A));
  const output = Object.keys(arr).find((key) => arr[key] % 2 == 1);
  return output?.charCodeAt() < 40000
    ? output?.charCodeAt() / 100
    : output?.charCodeAt() - 65536;
};

module.exports = { findOdd };

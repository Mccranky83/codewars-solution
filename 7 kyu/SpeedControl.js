let s = 15;
let x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
const gps = (s, x) => {
  return x.length > 2
    ? Math.floor(
        x
          .slice(1)
          .reduce((acc, cur, i) => {
            acc.push(cur - x[i]);
            return acc;
          }, [])
          .map((i) => (3600 * i) / s)
          .reduce((acc, cur) => (cur > acc ? cur : acc)),
      )
    : 0;
};

console.log(gps(s, x));

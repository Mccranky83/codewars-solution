const x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
const s = 15;
const gps = (s, x) =>
  Math.floor(
    (3600 * x.slice(1).reduce((acc, cur, i) => Math.max(cur - x[i], acc), 0)) /
      s,
  );
console.log(gps(s, x));

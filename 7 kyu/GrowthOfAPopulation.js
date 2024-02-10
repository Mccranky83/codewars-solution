const nbYear = (p0, percent, aug, p, count = 0) => {
  if (p0 > p) return count;
  count++;
  // console.log(p0);
  p0 = Math.floor(p0 + p0 * 0.01 * percent + aug);
  // console.log(p0);
  return nbYear(p0, percent, aug, p, count);
};
console.log(nbYear(1500, 5, 100, 5000));

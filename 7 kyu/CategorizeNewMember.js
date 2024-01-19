const data = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
const openOrSenior = (data) =>
  data.reduce((acc, cur) => {
    acc.push(cur[0] >= 55 && cur[1] > 7 ? "Senior" : "Open");
    return acc;
  }, []);

console.log(openOrSenior(data));

const number = (busStops) =>
  busStops.reduce((acc, cur) => acc + cur[0] - cur[1], 0);
console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ]),
);

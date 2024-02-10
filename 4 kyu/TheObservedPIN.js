const createPad = () =>
  [...Array(9)].reduce((acc, _, i) => {
    !(i % 3) && acc.push([]);
    acc[acc.length - 1].push(i + 1);
    return acc;
  }, []);
const createMap = () =>
  Object.assign(
    Object.fromEntries(
      createPad().flatMap((t) =>
        t.map((e, _, self) => [
          e,
          [
            self.includes(e - 1) ? [e - 1] : [],
            self.includes(e + 1) ? [e + 1] : [],
            e > 3 ? [e - 3] : [],
            e < 7 ? [e + 3] : [],
            !(e - 8) ? [0] : [],
            e,
          ]
            .flat()
            .sort(),
        ]),
      ),
    ),
    { 0: [0, 8] },
  );
const getCombinations = (arr, index = 0) => {
  if (!(arr.length - 1 - index)) return arr[index].map((t) => t.toString());
  return arr[index].flatMap((t) =>
    getCombinations(arr, index + 1).map((e) => t + e),
  );
};
const getPINs = (observed) =>
  getCombinations([...observed].map((t) => createMap()[t]));

console.log(getPINs("118"));

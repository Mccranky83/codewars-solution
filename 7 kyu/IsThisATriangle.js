const isTriangle = (a, b, c) => {
  let arr = [a, b, c].sort((a, b) => a - b);
  if (arr.some((t) => t < 0)) return false;
  return arr[0] + arr[1] > arr[2] && arr[2] - arr[0] < arr[1];
};
console.log(isTriangle(10, 5, 2));

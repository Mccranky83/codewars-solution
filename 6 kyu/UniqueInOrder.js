const uniqueInOrder = (itr) => {
  typeof itr === "object" && (itr = itr.join(""));
  return itr
    .replace(/(.)(\1+)/g, "$1")
    .split("")
    .map((t) => (isNaN(Number(t)) ? t : Number(t)));
};
console.log(uniqueInOrder("AABBBCcDDAABB"));
console.log(uniqueInOrder([1, 2, 2]));

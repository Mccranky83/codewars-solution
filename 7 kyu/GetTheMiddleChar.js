const getMiddle = (s) => {
  if (s.length < 3) return s;
  return getMiddle(s.slice(1, s.length - 1));
};
console.log(getMiddle("abba"));

const isPangram = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .replace(/(.)(?=.+\1)/g, "").length - 26
    ? false
    : true;
console.log(isPangram("The quick brown fox jumps over the lazy dog."));

const pigIt = (str) => str.replace(/\b(\w)(\w*)/g, "$2$1ay");

console.log(pigIt("hello world !"));

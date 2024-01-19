const text = "The sunset sets at twelve o' clock.";
const alphabetPosition = (text) =>
  [...text.toLowerCase()]
    .map((t) => t.charCodeAt())
    .filter((t) => t >= 97 && t <= 122)
    .map((t) => t - 96)
    .join(" ");
console.log(alphabetPosition(text));

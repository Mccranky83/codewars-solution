const generateHashtag = (str) =>
  str.trim() && str.replace(/\s/g, "").length < 140
    ? "#" +
      str
        .replace(/\s\w/g, (t) => t.charAt(1).toUpperCase())
        .replace(/\s+/g, "")
        .replace(/^./g, (t) => t.toUpperCase())
    : false;
console.log(generateHashtag("CodeWars"));

const pattern = (n) =>
  [...Array(n)]
    .map((_, i) => (i > 0 ? "1" + "*".repeat(i) + (i + 1) + "\n" : "1\n"))
    .join("")
    .slice(0, -1);

const pattern = (n) =>
  n > 1
    ? [...Array(n)]
        .map((_) => [...Array(n)].map((_, i) => n - i))
        .reduce((acc, cur, i) => acc + cur.slice(0, n - i) + "\n", "")
        .split(",")
        .join("")
        .slice(0, -1)
    : n == 1
    ? "1"
    : "";

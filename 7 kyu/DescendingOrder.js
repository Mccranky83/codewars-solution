const descendingOrder = (n) =>
  Number([...n.toString()].sort((a, b) => b - a).join(""));

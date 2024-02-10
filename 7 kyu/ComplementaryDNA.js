const dnaStrand = (dna) =>
  [...dna]
    .map(
      (t) => Object.fromEntries([..."ATCG"].map((t, i) => [t, "TAGC"[i]]))[t],
    )
    .join("");
console.log(dnaStrand("TTAGC"));

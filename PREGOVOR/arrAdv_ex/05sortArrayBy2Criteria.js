function sortArrayByTwoCriteria(arr) {
  // sortirame po 2 kriterii
  // 1. po duljina (length)
  // 2. po azbuchen red
  let sortedOne = arr.sort((a, b) => {
    // po duljina
    if (a.length !== b.length) {
      // ako a e razlichna ot b duljina
      return a.length - b.length; // return
    }
  });
}

sortArrayByTwoCriteria(["alpha", "beta", "gamma"]);
sortArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

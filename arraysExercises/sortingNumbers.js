function sortingNumbers(arrOfNums) {
  // sortirame imenata
  const sortedNums = arrOfNums.sort((numA, numB) => numA - numB); // sortirame gi po golemina
  const result = [];
  while (sortedNums.length !== 0) {
    // !== 0 - razlichno ot 0
    const firstEl = sortedNums.shift();
    const lastEl = sortedNums.pop();
    result.push(firstEl, lastEl);
  }
  return result;
}
sortingNumbers[(1, 65, 3, 52, 48, 63, 31, -3, 18, 56)];
// output [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

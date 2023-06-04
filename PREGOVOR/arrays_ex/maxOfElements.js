function maxOfElements(arr) {
  // namerete nai-dulgata poredica, ako ima 2 ednakvi izpechatai lqvata
  let currSequence = []; // pravim 2 masiva - current poredica (izrechenie)
  let longestSequence = []; // pravim masiv za nai-dulgata poredica

  for (let i = 0; i < arr.length; i++) {
    // obhojdame masiva
    if (currSequence.length === 0 || arr[i] === currSequence[0]) {
      // ako duljinata na curr seq e ravna na 0 ili arr ot index e raven na index 0  pushvame kum nastoqshtiq masiv
      currSequence.push(arr[i]);
    } else {
      if (currSequence.length > longestSequence.length) {
        longestSequence = currSequence.slice();
      }
      currSequence = [arr[i]];
    }
  }
  if (currSequence.length > longestSequence.length) {
    longestSequence = currSequence;
  }
  return longestSequence.join(" ");
}
console.log(maxOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(`--------------------------------------`);
maxOfElements([1, 1, 1, 2, 3, 1, 3, 3]);
console.log(`----------------------------------------`);
maxOfElements([4, 4, 4, 4]);
console.log(`-----------------------------------------`);
maxOfElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);

function smallestTwo(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b;
  });
  console.log(sorted.slice(0, 2).join(" "));
}
smallestTwo([30, 15, 50, 5]);
console.log(`---------------------------`);
smallestTwo([3, 0, 10, 4, 7, 3]);
console.log(`-------------------------------`);

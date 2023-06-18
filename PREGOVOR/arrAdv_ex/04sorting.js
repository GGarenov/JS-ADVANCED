function sorting(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(sortArr[i]);
    console.log(sortArr[sortArr.length - 1 - i]);
  }
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log(`-------------------------------`);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);

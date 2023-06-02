function condence(arr) {
  while (arr.length > 1) {
    let condencedArr = [];
    for (i = 0; i < arr.length - 1; i++) {
      condencedArr.push(arr[i] + arr[i + 1]);
    }
    arr = condencedArr;
  }
  console.log(arr[0]);
}
console.log(condence([2, 10, 3]));
console.log(`------------------------------`);
condence([5, 0, 4, 1, 2]);
console.log(`--------------------------`);
condence([1]);

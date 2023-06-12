function negPosNums(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);

    if (arr[i] < 0) {
      newArr.unshift(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(`\n`));
}
negPosNums(["7", "-2", "8", "9"]);
console.log(`---------------------`);
negPosNums(["3", "-2", "0", "-1"]);

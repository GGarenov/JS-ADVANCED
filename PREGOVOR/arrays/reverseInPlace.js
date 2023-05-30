function reverse(arr) {
  let newArr = [];
  for (i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr.join(" "));
}
reverse(["a", "b", "c", "d", "e"]);
console.log(`---------------------------`);
reverse(["abc", "def", "hig", "klm", "nop"]);

function sumFirstLast(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    for (k = 0; (k = arr.length - 1); k++) {
      arr[k] = Number(arr[k]);
      console.log(arr[i] + arr[k]);
      return;
    }
  }
}
sumFirstLast(["20", "30", "40"]);

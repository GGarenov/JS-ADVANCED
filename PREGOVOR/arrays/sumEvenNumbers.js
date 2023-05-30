function sumEvenNumbers(arr) {
  // uslovie: Suberete chetnite chisla v arr
  let sum = 0; // pravim si promenliva sum
  for (i = 0; i < arr.length; i++) {
    // prevrushtame arr v chisla
    arr[i] = Number(arr[i]);
  }
  for (let num of arr) {
    // iterirame po chislata i izbirame chetnite
    if (num % 2 == 0) {
      sum += num; // subirame chetnite
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);

function reverse(n, arr) {
  //uslovie: vzimame purvite n chisla ot arr i gi obrushtame
  let newArr = [];
  for (let i = n - 1; i >= 0; i--) {
    // i = n (n na broi chisla iskame i >= 0 & i-- zashtoto spirame na 0 i-- e zashtoto vadim)

    let element = arr[i]; // krushtavame element - namerenite chisla
    newArr.push(element); // slagame gi v nov array prazen
  }
  console.log(newArr.join(" ")); // printvame go
}
reverse(3, [10, 20, 30, 40, 50]);
console.log(`--------------------------------------------`);
reverse(4, [-1, 20, 99, 5, 10, 50, 32]);

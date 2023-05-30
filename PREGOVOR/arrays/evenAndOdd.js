function evenAndOdd(arr) {
  // calculate the difference between even and odd numbers
  //1. prevrushtame arr v chisla
  sumEven = 0; // pravim sum za chetnite
  sumOdd = 0; // pravim sum za nechetnite
  for (i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  //2. pravim 2 promenlivi sum-a za chetnite i nechetnite

  for (num of arr) {
    // iteriram po chislata
    if (num % 2 == 0) {
      // proverqvam dali sa chetni
      sumEven += num; // dobavqm kum chetnite
    } else if (num % 2 == 1) {
      // proverqvam nechetnite
      sumOdd += num; // dobavqm kum nechetnite
    }
  }
  //   console.log(sumEven); - print chetnite
  //   console.log(sumOdd); - printiram nechetnite
  console.log(sumEven - sumOdd);

  //3. izvajdame chetnite ot nechetnite
}
evenAndOdd([1, 2, 3, 4, 5, 6]);
console.log(`------------------------------`);
evenAndOdd([3, 5, 7, 9]);
console.log(`---------------------------------`);
evenAndOdd([2, 4, 6, 8, 10]);

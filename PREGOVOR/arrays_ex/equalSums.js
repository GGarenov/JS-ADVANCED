function equalSums(arr) {
  // da razberem dali lqvata i dqsnata strana na arr sa ravni
  for (let i = 0; i < arr.length; i++) {
    // iterirame po arr-a
    let leftsum = 0; // pravim si 2 promenlivi za lqva suma i dqsna
    let rightsum = 0;
    for (j = 0; j < i; j++) {
      // pravim cikal za lqvata promenliva
      leftsum += arr[j];
    }
    for (k = i + 1; k < arr.length; k++) {
      // pravim za dqsnata kato k = i + 1 - i chisloto + 1 t.e. edin index na dqsno da izmesti
      rightsum += arr[k];
    }

    if (leftsum === rightsum) {
      return i;
    }
  }
  return "no";
}

equalSums([1, 2, 3, 3]);
console.log(`--------------------------------------`);
equalSums([1, 2]);
console.log(`------------------------------------------`);
equalSums([1]);
console.log(`------------------------------`);
equalSums([1, 2, 3]);
console.log(`----------------------------------------------`);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

function maxNum(arr) {
  // namirame 3-te nai-golemi chisla i gi izpisvame v nov masiv
  let newArr = []; // pravim nov masiv
  for (let i = 0; i < arr.length; i++) {
    // iterirame po noviq masiv
    let isTopInteger = true; // pravim promenliva za nai-golqmo chislo
    for (let j = i + 1; j < arr.length; j++) {
      // iterirame po promenlivata kato j = i + 1; t.e. i + 1 index.
      if (arr[i] <= arr[j]) {
        // ako i <= j spirame
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      // izvikvame noviq masiv
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}

maxNum([1, 4, 3, 2]);
console.log(`----------------------------------------------`);
maxNum([14, 24, 3, 19, 15, 17]);
console.log(`-----------------------------------------------`);
maxNum([41, 41, 34, 20]);

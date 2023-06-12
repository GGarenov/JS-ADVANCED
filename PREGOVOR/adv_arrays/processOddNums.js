function processOddNums(arr) {
  // vzimame chislata ot odd indexite x2 i gi reversvame
  let newArr = []; // pravim nova promenliva
  for (i = 0; i < arr.length; i++) {
    // iterirame po masiva
    arr[i] = Number(arr[i]); // obrushtame gi v chisla
    if (i % 2 == 1) {
      // proverqvame ako dali e necheten indexa
      newArr.push(arr[i] * 2); // vkarvame go v noviq masiv x2
    }
  }
  console.log(newArr.reverse(arr[i]).join(" ")); // reverse i join
}

processOddNums([10, 15, 20, 25]);
console.log(`---------------------------`);
processOddNums([3, 0, 10, 4, 7, 3]);

// NOOO ima i drug nachin

function drugNachin(arr1) {
  let novArr = arr1 // rabotim direktno v noviq masiv
    .filter((x, i) => i % 2 !== 0) // filtrirame, ako i se deli na 2 i e razlichno ot 0
    .map((x) => x * 2) // mapvame vsqko chislo koeto sme filtirali da se umnoji x2
    .reverse() // obrushtame reda
    .join(" "); // pechatame s razstoqnie

  return novArr;
}
console.log(drugNachin([3, 0, 10, 4, 7, 3]));

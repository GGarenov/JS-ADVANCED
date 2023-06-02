function mergeArrays(arr1, arr2) {
  // ako indexa v 2ta masiva e cheten gi subirame i gi slagame v nov masiv, ako e necheten gi konkatenirame (dolepqme gi edin za drug) i gi slagame v noviq masiv
  let newArr = []; // suzdavame nov masiv
  for (i = 0; i < arr1.length; i++) {
    // obhojdame go
    let valueA = arr1[i]; // pravim si valueA za indexa ot masiv 1
    let valueB = arr2[i]; // pravim valueB za indexa ot masiv 2
    if (i % 2 === 0) {
      // prevrushtame gi v chisla
      valueA = Number(valueA);
      valueB = Number(valueB);
    }
    let currentResult = valueA + valueB; // subirame gi za da gi slojim v noviq masiv
    newArr.push(currentResult); // pushvame gi kum noviq masiv
  }
  console.log(newArr.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);

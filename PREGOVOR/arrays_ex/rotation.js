function rotation(arr, num) {
  // uslovie: da zavurtim chislata v arraya vhod: arr i broi zavurtaniq
  let newArr = []; // pravim si nov arr kadeto da skladirame novite chisla
  for (let i = 0; i < num; i++) {
    // obhojdame arr-a num na broi puti
    let currEl = arr[0]; // currEl - chisloto koeto mestim kato zapo4va ot index 0
    for (let j = 1; j < arr.length; j++) {
      // pravim nova pormenliva j s koqto obhojdame duljinata na arr-a no zapochva ot 1 index zashtoto 0-viq go vzimame.
      newArr.push(arr[j]); // pushvame kum noviq masiv
    }
    newArr.push(currEl); // pushvame currEl
    arr = newArr; // izravnqvame gi za da ne se promenqt i 2ta arr-a
    newArr = []; // i si pravim noviq arr
  }
  console.log(arr.join(" ")); // iskame gi s razstoqniq edno ot drugo
}
rotation([51, 47, 32, 61, 21], 2);
console.log(`----------------------------`);
rotation([32, 21, 61, 1], 4);
console.log(`------------------------------`);
rotation([2, 4, 15, 31], 5);

function magicSum(arr, num) {
  // namerete dvoikite chisla, sbora ot koito pravi num
  let newArr = []; // pravim si prazen masiv kadeto da dobavqme dvoikite chisla
  // pravim 2 promenlivi i and j
  for (let i = 0; i < arr.length; i++) {
    // obhojdame masiva s i
    // j = i +1; t.e. chisloto na sledvashtiq index dokato ne stignem duljinata na masiva.
    for (let j = i + 1; j < arr.length; j++) {
      // proverqvame dali index ot i + index ot j e ravno na num
      if (arr[i] + arr[j] === num) {
        // dobavqme chislata kum noviq masiv ako sbora im pravi num
        newArr.push(`${arr[i]} ${arr[j]}`);
      }
    }
  }
  // tarikatsko joinvane na nov red
  console.log(newArr.join("\n"));
}
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log(`-------------------------------`);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log(`---------------------------------`);
magicSum([1, 2, 3, 4, 5, 6], 6);

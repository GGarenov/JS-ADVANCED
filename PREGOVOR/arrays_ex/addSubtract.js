function addSub(arr) {
  // dobavqme kum chetnite chisla tehniq index, kum nechetnite izvajdame tehniq index
  let oldSum = 0; // pravim si promenliva za subirane
  let newSum = 0;
  for (i = 0; i < arr.length; i++) {
    // iterirame po arr-a
    let currentNum = arr[i]; // arr[i] ni e indexa i gi vadim chislo po chislo
    oldSum += currentNum; // subirame chislata

    if (currentNum % 2 == 0) {
      // proverqvame dali e chetno
      currentNum += i; // i - e indexa t.e. dobavqme indexa kum chisloto
      arr[i] = currentNum; // promenqme veche subranoto chislo
    } else if (currentNum % 2 == 1) {
      // tuka proverqvame dali e nechetno (moje i samo else)
      currentNum -= i; // izvajdame indexa mu (i e index)
      arr[i] = currentNum; // promenqme veche izvadenoto chislo
    }
    newSum += currentNum; // tuka subirame sumata ot novite chisla
  }
  console.log(arr); // pechatame noviq array
  console.log(oldSum); // sumata ot starite
  console.log(newSum); // sumata ot novite chisla
}
addSub([5, 15, 23, 56, 35]);
console.log(`-------------------------`);
addSub([-5, 11, 3, 0, 2]);

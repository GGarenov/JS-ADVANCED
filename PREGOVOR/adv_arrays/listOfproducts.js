function listOfproducts(arr) {
  let sorted = arr.sort();
  for (let i = 0; i < sorted.length; i++) {
    console.log(`${i + 1}.${sorted[i]}`);
  }
}
listOfproducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
console.log(`----------------------------------`);
listOfproducts(["Watermelon", "Banana", "Apples"]);

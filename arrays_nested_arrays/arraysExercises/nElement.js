function nElement(arr, step) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (i % step === 0) {
      output.push(element);
    }
  }
  return output;
}
console.log(nElement(["5", "20", "31", "4", "20"], 2));
console.log(`----------------`);
nElement(["dsa", "asd", "test", "tset"], 2);
console.log(`----------------`);
nElement(["1", "2", "3", "4", "5"], 6);

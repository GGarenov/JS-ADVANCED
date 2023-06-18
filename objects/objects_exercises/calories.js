function calorieObject(arrOfstr) {
  const obj = {};
  for (let i = 0; i < arrOfstr.length; i += 2) {
    const element = arrOfstr[i];

    obj[arrOfstr[i]] = Number(arrOfstr[i + 1]);
  }

  return obj;
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

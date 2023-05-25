function convertObject(jsonStr) {
  let person = JSON.parse(jsonStr); // obrushtame go ot json
  for (key in person) {
    // iterirame keys in person
    let value = person[key]; // value da e ravno na key
    console.log(`${key}: ${value}`);
  }
}
console.log(convertObject, '{"name": "George", "age": 40, "town": "Sofia"}');

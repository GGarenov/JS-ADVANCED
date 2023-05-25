function convertJson(firstName, lastName, hairColor) {
  let person = {
    name: firstName,
    lastName,
    hairColor,
  };
  console.log(JSON.stringify(person));
}
convertJson("George", "Jones", "Brown");

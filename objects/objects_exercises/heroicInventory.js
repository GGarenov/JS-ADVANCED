function heroicInventory(input) {
  // create register of heroes with names, items and levels
  let result = []; // we create new arr to store the new info
  for (const elements of input) {
    // obhojdame masiva
    let [name, level, items] = elements.split(" / "); // razdelqme propertitata
    level = Number(level); // pravim level na chislo
    items = items ? items.split(", ") : []; // ako nqma itemi, gi razdelqme sus zapetaq

    result.push({ name, level, items }); // pushvame kum rezultata
  }
  console.log(JSON.stringify(result)); // pravim go v JSON format
}
heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

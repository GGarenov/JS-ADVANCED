function arrManipulations(input) {
  // uslovie: napishete funkciq koqto da izpulnqva komandi
  // Add {number}: add a number to the end of the array
  // · Remove {number}: remove all occurrences of a particular number from the array
  // · RemoveAt {index}: removes number at a given index
  // · Insert {number} {index}: inserts a number at a given index
  let arr = input[0].split(" ").map(Number); // <- kazvame che input[0] si e otdelen string i s map go pravim na chisla
  let commands = input.slice(1); // <- tuk veche rabotim samo po 2rata chast sled index 0
  for (let i = 0; i < commands.length; i++) {
    let tokens = commands[i].split(" "); // <- tuk izbroqvame tokenite add, remove i dr.
    let command = tokens[0];
    let parameters = tokens.slice(1).map(Number); // <- primerno Add 1 ili Remove 2
    arr = executeCommand(command, parameters, arr);
  }
  return arr.join(" ");

  function executeCommand(command, parameters, arr) {
    switch (command) {
      case "Add":
        arr.push(parameters[0]);
        return arr;

      case "Remove":
        arr = arr.filter((x) => x !== parameters[0]);
        return arr;

      case "RemoveAt":
        arr.splice(parameters[0], 1);
        return arr;

      case "Insert":
        arr.splice(parameters[1], 0, parameters[0]);
        return arr;
    }
    return arr.join(" ");
  }
}
console.log(
  arrManipulations([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3",
  ])
);

console.log(`-------------------------`);
arrManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);

function train(input) {
  let wagons = input.shift().split(" ").map(Number); // s input.shift() vzimame samo purviq element
  let maxCapacity = Number(input.shift());
  for (let el of input) {
    let command = el.split(" ");
    if (command[0] === "Add") {
      wagons.push(Number(command[1]));
    } else {
      let passengers = Number(command[0]);
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + passengers <= maxCapacity) {
          wagons[i] += passengers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
console.log(`------------------------------`);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);

function dayOfWeek(day) {
  let dayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (day < 1 || day > 7) {
    console.log(`Invalid day!`);
  } else {
    console.log(dayOfWeek[day - 1]);
  }
}
dayOfWeek([2]);

function sortListOfNames(listOfNames) {
  const sortedArray = listOfNames.sort((nameA, nameB) =>
    nameA.localeCompare(nameB)
  );

  sortedArray.forEach((name, index) => console.log(`${index + 1}.${name}`));
}

sortListOfNames(["John", "Bob", "Christina", "Ema"]);

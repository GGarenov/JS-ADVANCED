function solve() {
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";

  const lowerCaseText = document.getElementById("text").value.toLowerCase();
  const currentCase = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  if (currentCase !== CAMEL_CASE && currentCase !== PASCAL_CASE) {
    result.textContent = "Error!";
    return;
  }

  const arrOfWords = lowerCaseText.split(" ");
  let output = "";
  let startingPoints = 0;

  if (currentCase === CAMEL_CASE) {
    output += arrOfWords[0];
    startingPoints = 1;
  }

  for (let i = startingPoints; i < arrOfWords.length; i++) {
    const currentWord = arrOfWords[i];
    output +=
      currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);

    result.textContent = output;
  }
}

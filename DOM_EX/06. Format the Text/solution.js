function solve() {
  //capture elements

  const textArea = document.getElementById("input");
  const textAreaValue = textArea.value;
  const resultDiv = document.getElementById("output");

  //Prepare data for business logic
  const sentancesArr = textAreaValue
    .split(".")
    .filter((s) => s !== "")
    .map((s) => s + ".");

  const paragraphRoof = Math.ceil(sentancesArr.length / 3);

  for (let i = 0; i < paragraphRoof; i++) {
    const joinedSentence = sentancesArr.splice(0, 3).join("");
    resultDiv.innerHTML += `<p>${joinedSentence}</p>`;
  }
}

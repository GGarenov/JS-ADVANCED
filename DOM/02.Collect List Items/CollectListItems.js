function extractText() {
  let element = document.getElementsByTagName("li");
  let liArray = Array.from(element);
  let allTexts = liArray.map((x) => x.textContent);

  let textArea = document.getElementById("result");
  textArea.value = allTexts.join("\n");
}

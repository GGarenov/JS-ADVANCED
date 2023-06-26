function toggle() {
  // pravim is butonite
  const MORE = "More";
  const LESS = "Less";
  // capture elements
  const button = document.querySelector(".button"); // vzimame butona
  const divWrapperText = document.querySelector("#extra"); // vzimame texta
  // toggle functionality
  // change text of the button
  button.textContent = button.textContent === MORE ? LESS : MORE; // if more give less > more

  // hide/show the text
  divWrapperText.style.display =
    divWrapperText.style.display === "none" ||
    divWrapperText.style.display === ""
      ? "block"
      : "none";
}

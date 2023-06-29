function addItem() {
  let input = document.getElementById("newItemText"); // izbirame inputa s id newitemtext
  let value = input.value; // input.value e texta koito vuvejda potrebitelq
  let items = document.getElementById("items"); // izbirame itemite
  let newLi = document.createElement("li"); // pravim novo li
  newLi.textContent = value; // novoto li = texta na potrebitelq
  items.appendChild(newLi); // zakachame kum noviq child newLi-to
}

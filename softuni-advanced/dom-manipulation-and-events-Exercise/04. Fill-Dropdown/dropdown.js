function addItem() {
  const itemText = document.getElementById("newItemText").value;
  const itemValue = document.getElementById("newItemValue").value;
  const selectMenu = document.getElementById("menu");
  const options = document.createElement("option");
  
  options.textContent = itemText;
  options.value = itemValue;
  selectMenu.appendChild(options);
  document.getElementById("newItemText").value = "";
  document.getElementById("newItemValue").value = "";
}

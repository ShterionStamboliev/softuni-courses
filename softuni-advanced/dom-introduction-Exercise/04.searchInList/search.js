function search() {
  let townNames = document.querySelectorAll("ul#towns li");
  let resultField = document.getElementById("result");
  let searchField = document.getElementById("searchText").value;
  let matchesCount = 0;

  for (const town of townNames) {
    let str = town.textContent;
    if (str.match(searchField)) {
      matchesCount++;
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
    } else {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    }
  }
  resultField.textContent = `${matchesCount} matches found`;
}

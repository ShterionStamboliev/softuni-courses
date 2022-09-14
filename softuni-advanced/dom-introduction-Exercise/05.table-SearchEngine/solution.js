function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const tableContent = [...document.querySelectorAll("tbody tr")];
  let searchField = document.getElementById("searchField");

  function onClick() {
    tableContent.map((el) => {
      if (el.innerHTML.includes(searchField.value)) {
        el.className = "select";
      } else {
        el.className = "";
      }
    });
    searchField.value = "";
  }
}

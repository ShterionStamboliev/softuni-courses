function sortAnArrayByTwoCriteria(arr) {
  let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(sortedArr.join("\n"));
}
// sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayByTwoCriteria(["test", "Deny", "omen", "Default"]);

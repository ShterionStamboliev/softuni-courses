function searchForANumber(arr1, arr2) {
    
let [numsToTake, numsToDelete, numToSearchFor] = arr2.map(Number);
let numCount = 0;

  let newArr = arr1.splice(0, numsToTake);
  newArr.splice(0, numsToDelete);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.includes(numToSearchFor)) {
      let indexSearch = newArr.indexOf(numToSearchFor);
      numCount++;
      newArr.splice(indexSearch, 1);
      // i--;
    }
  }
  console.log(`Number ${numToSearchFor} occurs ${numCount} times.`);
}
searchForANumber([5, 2, 3, 3, 3, 3, 3, 4, 1, 6], [5, 2, 3]);

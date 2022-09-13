function createSortedList() {
  const elements = [];

  return {
    add(element) {
      elements.push(element);
      elementsSort(elements);
    },

    remove(index) {
      if (validIndex(index)) {
        elements.splice(index, 1);
      } else {
        throw new Error("Invalid input!");
      }
      elementsSort(elements);
    },

    get(index) {
      if (validIndex(index)) {
        return elements[index];
      } else {
        throw new Error("Invalid input!");
      }
    },

    get size() {
      return elements.length;
    },
  };

  function elementsSort(arr) {
    return arr.sort((a, b) => a - b);
  }

  function validIndex(index) {
    return index >= 0 && index < elements.length;
  }
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

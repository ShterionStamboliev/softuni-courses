function sortAnArrayBy2Criteria(input) {
  return input
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n");
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

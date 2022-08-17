function pieceOfPie(arr, firstTarget, secondTarget) {
  return arr.slice(arr.indexOf(firstTarget), arr.indexOf(secondTarget) + 1);
}
pieceOfPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);

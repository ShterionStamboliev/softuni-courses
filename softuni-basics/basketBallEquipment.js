function basketballEquipment(input) {
  const trainingCost = Number(input[0]);
  const shoePrice = trainingCost - 0.4 * trainingCost;
  const outfitPrice = shoePrice - 0.2 * shoePrice;
  const ballPrice = outfitPrice / 4;
  const equipmentPrice = ballPrice / 5;
  const totalEquipmentCost =
    trainingCost + shoePrice + outfitPrice + ballPrice + equipmentPrice;
  console.log(totalEquipmentCost);
}

basketballEquipment(["365"]);

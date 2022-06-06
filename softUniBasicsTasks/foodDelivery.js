function foodDelivery(input) {
    const chickenMenu = 10.35;
    const fishMenu = 12.40;
    const vegetarianMenu = 8.15;
    const deliveryCost = 2.50;
    const chickenMenuNumber = Number(input[0]);
    const fishMenuNumber = Number(input[1]);
    const vegetarianMenuNumber = Number(input[2]);
    const chickenMenuPrice = chickenMenuNumber * chickenMenu;
    const fishMenuPrice = fishMenuNumber * fishMenu;
    const vegetarianMenuPrice = vegetarianMenuNumber * vegetarianMenu;
    const totalMenuCost = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    const desertCost = totalMenuCost * 20 / 100;
    const totalOrderPrice = totalMenuCost + desertCost + deliveryCost;
    console.log(totalOrderPrice);
}

foodDelivery(["2", "4", "3"]);
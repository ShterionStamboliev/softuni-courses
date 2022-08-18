function calories(input) {
    let foodsObj = {};
    for (let i = 0; i < input.length; i+=2) {
        let product = input[i];
        let quantity = Number(input[i + 1]);
        foodsObj[product] = quantity;
    }
    console.log(foodsObj);
}
calories(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

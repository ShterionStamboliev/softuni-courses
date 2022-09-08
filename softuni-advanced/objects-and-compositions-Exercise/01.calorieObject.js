function calories(input) {
    const foodsObj = {};
    for (let i = 0; i < input.length; i+=2) {
        const product = input[i];
        const quantity = Number(input[i + 1]);
        foodsObj[product] = quantity;
    }
    console.log(foodsObj);
}
calories(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

function fruitVegetable(input) {
    const fruitOrVegetable = input[0];

    if (fruitOrVegetable === 'banana' || fruitOrVegetable === 'apple' || fruitOrVegetable === 'kiwi' || fruitOrVegetable === 'cherry' ||
    fruitOrVegetable === 'lemon' || fruitOrVegetable === 'grapes') {
        console.log('fruit');
    } else if (fruitOrVegetable === 'tomato' || fruitOrVegetable === 'cucumber' || fruitOrVegetable === 'pepper' ||
    fruitOrVegetable === 'carrot') {
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}
fruitVegetable(['banana']);
class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this.currentProducts = [];
    };

    loadingVegetables(vegetables) {
        for (const veg of vegetables) {
            let [type, quantity, price] = veg.split(' ');
            quantity = +quantity;
            price = +price;
            const tempProduct = this.availableProducts.find(p => p.type === type);
            if (!tempProduct) {
                const prod = {
                    type,
                    quantity,
                    price
                };
                this.availableProducts.push(prod);
            } else {
                if (tempProduct.price < price) {
                    tempProduct.price = price;
                }
                tempProduct.quantity += quantity;
            };
        };
        return `Successfully added ${this.availableProducts.map(n => n.type).join(', ')}`
    };

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const veg of selectedProducts) {
            let [type, quantity] = veg.split(' ');
            quantity = +quantity;
            const findVeg = this.availableProducts.find(veg => veg.type === type);
            if (!findVeg) {
                throw new Error (`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            };
            let currentQuantity = findVeg.quantity;
            let currentPrice = findVeg.price;
            if (findVeg.quantity < quantity) {
                throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                currentQuantity -= quantity;
                totalPrice += currentPrice * quantity;
                findVeg.quantity -= quantity;
            }
        };
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    };

    rottingVegetable(type, quantity) {
        quantity = +quantity;
        const findVeg = this.availableProducts.find(p => p.type === type);
        if (!findVeg) {
            throw new Error (`${type} is not available in the store.`)
        }
        if (quantity > findVeg.quantity) {
            findVeg.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }
        findVeg.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`
    };

    revision() {
        let result = [`Available vegetables:`];
        this.availableProducts.sort((a, b) => a.price - b.price).forEach(veg => {
            result.push(`${veg.type}-${veg.quantity}-$${veg.price}`);
        });
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return result.join('\n');
    };
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

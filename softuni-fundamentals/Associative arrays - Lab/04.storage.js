function storage(arr){
    let obj = new Map();

    for (let info of arr) {
        let [product, quantity] = info.split(' ');
        if (obj.has(product)) {
            let oldQuantity = obj.get(product)
            obj.set(product, oldQuantity + Number(quantity));
        } else {
            obj.set(product, Number(quantity));
        }
    }
    for (const [product, quantity] of obj) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);
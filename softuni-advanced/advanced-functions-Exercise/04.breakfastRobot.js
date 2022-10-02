function robot() {
    let res = '';

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            fat: 10,
            carbohydrate: 10,
            flavour: 10
        },
    };
        const stock = {
            restock: (microelement, quantity) => {
                ingredients[microelement] += +quantity;
                res = 'Success';
            },
            prepare: (recipe, quantity) => {
                quantity = +quantity;
                let canPrepare = true;
                Object.entries(recipes[recipe]).forEach(el => {
                    let [macroel, count] = el;
                    if (canPrepare && ingredients[macroel] < count * quantity) {
                        canPrepare = false;
                        res = `Error: not enough ${macroel} in stock`;
                    }
                });
                if (canPrepare) {
                    Object.entries(recipes[recipe]).forEach(recipe => {
                        let [key, val] = recipe;
                        ingredients[key] -= val * quantity;
                    });
                    res = 'Success';
                }
            },
            report: () => {
                res = '';
                Object.entries(ingredients).forEach(ing => {
                    let [macro, qtity] = ing;
                    res += `${macro}=${qtity} `
                });
                res = res.trimEnd();
            }
        }
        return function(data) {
            let [commands, prod, qtity] = data.split(' ');
            qtity = +qtity;
            
            stock[commands](prod, qtity);
            return res;
        }
}
let manager = robot(); 
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock 
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock 
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // Error: not enough carbohydrate in stock 


// Object.entries(recipes[recipe]).forEach(rec => {
//     const [microel, count] = rec;
//     if (ingredients && ingredients[microel] < (count * +qtity)) {
//         res = `Error: not enough ${microel} in stock`;
//     }
// });

// if (ingredients[qtity] > qtity) {
//     Object.entries(recipes[recipe]).forEach(rec => {
//         const [micronutrient, cnt] = rec;
//         ingredients[micronutrient] -= cnt * qtity;
//     });
//     res = 'Success';
// }
class Restaurant {
    menu = {};
    stockProducts = {};
    history = [];
    constructor(budget) {
      this.budgetMoney = +budget;
      this.menu = {};
      this.stockProducts = {};
      this.history = [];
    }
    loadProducts(products) {
      for (const prod of products) {
        let [productName, quantity, price] = prod.split(" ");
        quantity = +quantity;
        price = +price;
        if (price <= this.budgetMoney) {
          if (!this.stockProducts[productName]) {
            this.stockProducts[productName] = 0;
          }
          this.budgetMoney -= price;
          this.stockProducts[productName] += quantity;
          this.history.push(`Successfully loaded ${quantity} ${productName}`);
        } else {
          this.history.push(`There was not enough money to load ${quantity} ${productName}`);
        }
      }
      return this.history.join("\n");
    }
    addToMenu(meal, products, price) {
      if (!this.menu[meal]) {
        this.menu[meal] = {
          products,
          price,
        };
      } else {
          return `The ${meal} is already in the our menu, try something different.`;
      }
      if (Object.keys(this.menu).length % 2 === 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else if (Object.keys(this.menu).length % 2 === 0) {
          return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
      }
    };
    showTheMenu() {
      if (Object.keys(this.menu).length === 0) return `Our menu is not ready yet, please come later...`;
      else {
          const res = [];
          for (const [meal, price] of Object.entries(this.menu)) {
              res.push(`${meal} - $ ${price.price}`); 
          }
          return res.join('\n');
      }
    };
    makeTheOrder(meal) {
      if (!this.menu[meal]) {
          return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
          let products = {};
          for (let product in this.menu[meal].products) {
            if (
              !this.stockProducts[product] ||
              this.stockProducts[product] < this.menu[meal].products[product]
            ) {
              return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
              products[product] = this.menu[meal].products[product];
            }
          }
    
          for (let product in products) {
            this.stockProducts[product] -= products[product];
          }
    
          this.budgetMoney += this.menu[meal].price;
          return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
      }
  }
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.makeTheOrder('frozenYogurt'));


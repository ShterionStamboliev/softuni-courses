<<<<<<< HEAD
function cityTaxes(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * (percentage / 100));
        },
    };
    return result;
}

const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city);
city.applyGrowth(5);
console.log(city);
city.applyRecession(10);
console.log(city);
=======
function cityTaxes(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * (percentage / 100));
        },
    };
    return result;
}

const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city);
city.applyGrowth(5);
console.log(city);
city.applyRecession(10);
console.log(city);
>>>>>>> 2629d4553db1ea799886b9a6c5ea625c874a2410

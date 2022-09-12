class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
        this.soldPrice = 0;
        this.soldCarsCount = 0;
    }

    addCar(model, horsepower, price, mileage) {
        horsepower = +horsepower;
        price = +price;
        mileage = +mileage;
        if (model.trim().length === 0 && model.trim() === '' || horsepower < 0 || mileage < 0 || price < 0) {
            throw Error('Invalid input!')
        } else {
            this.availableCars.push({model, horsepower, price, mileage});
            return `New car added: ${model} - ${horsepower} HP - ${(mileage).toFixed(2)} km - ${(price).toFixed(2)}$`
        }
    }
    
    sellCar(model, desiredMileage) {
        desiredMileage = Number(desiredMileage);
        this.availableCars.forEach((car, i) => {
            if (car.model === model) {
                if (+car.mileage <= desiredMileage) {
                    car.price = car.price;
                } else if (+car.mileage - desiredMileage <= 40000) {
                    car.price *= 0.95;
                } else if (+car.mileage - desiredMileage > 40000) {
                    car.price *= 0.90;
                } else {
                    throw Error(`${model} was not found!`)
                }
                this.soldCars.push(this.availableCars.splice(i, 1));
                this.soldPrice = car.price;
                this.totalIncome += this.soldPrice;
                this.soldCarsCount++;
                this.soldCars = this.soldCars.flat();
            } 
        });
        return `${model} was sold for ${(this.soldPrice).toFixed(2)}$`;
        }
    
    currentCar() {
        let result = ['-Available cars:'];
        if (this.availableCars.length !== 0) {
            this.availableCars.forEach(c => {
                result.push(`---${c.model} - ${c.horsepower} HP - ${(c.mileage).toFixed(2)} km - ${(c.price).toFixed(2)}$`);
            });
            return result.join('\n');
        } else {
            return 'There are no available cars';
        }
    }

    salesReport(criteria) {
        if (criteria === 'horsepower' || criteria === 'model') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower || a.model.localeCompare(b.model)
        )} else {
            throw Error('Invalid criteria!')
        }
    
        const cars = [];
        const user = `-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}`
        const carsSold = `-${this.soldCarsCount} cars sold:`
        this.soldCars.forEach((car) => {
            cars.push(`---${car.model} - ${car.horsepower} HP - ${(car.price).toFixed(2)}$`)
        });
        return `${user}$\n${carsSold}\n${cars.join('\n')}`
    }
    }
    let dealership = new CarDealership('SoftAuto');
    dealership.addCar('Toyota Corolla', 100, 3500, 190000);
    dealership.addCar('Mercedes C63', 300, 29000, 187000);
    dealership.addCar('Audi A3', 120, 4900, 240000);
    dealership.sellCar('Toyota Corolla', 230000);
    dealership.sellCar('Mercedes C63', 110000);
    console.log(dealership.salesReport('horsepower'));
    
class Garden {
    plants = [];
    storage = [];
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        spaceRequired = Number(spaceRequired);
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        } else {
            this.plants.push({ plantName: plantName, spaceRequired: spaceRequired, ripe: false, quantity: 0 });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        }
    };
    ripenPlant(plantName, quantity) {
        quantity = Number(quantity);
        const plantsArr = [];
        for (const plant of this.plants) {
            if (plant.plantName === plantName) {
                plantsArr.push(plant);
            }
        }
        if (plantsArr.length === 0) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        for (const plant of plantsArr) {
            if (plant.plantName === plantName && plant.ripe === false) {
                plant.ripe = true;
                plant.quantity += quantity;
            } else {
                if (plant.plantName === plantName && plant.ripe === true) {
                    throw new Error(`The ${plantName} is already ripe.`)
                }
            }
        }
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
    };
    harvestPlant(plantName) {
        const plantArr = [];
        for (const plant of this.plants) {
            if (plant.plantName === plantName) {
                plantArr.push(plant);
            }
        }
        if (plantArr.length === 0) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        for (const ripePlant of plantArr) {
            if (ripePlant.plantName === plantName && ripePlant.ripe === false) {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
            }
        }
        for (let i = 0; i < plantArr.length; i++) {
            const plantIndex = this.plants.indexOf(plantArr[i]);
            if (plantArr[i].plantName === plantName && plantArr[i].ripe === true) {
                const splicedPlant = this.plants.splice(plantIndex, 1);
                for (const plant of splicedPlant) {
                    this.spaceAvailable += plant.spaceRequired;
                    this.storage.push( {plantName: plant.plantName, quantity: plant.quantity });
                }
            }
            return `The ${plantName} has been successfully harvested.`
        }
    };
    generateReport() {
        let result = [`The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: `];
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        this.plants.forEach((plant) => {
            result += `${plant.plantName}, `
        });
        result = result.trim().replace(/,*$/,'');
        result += '\n'
        if (this.storage.length === 0) {
            return `Plants in storage: The storage is empty.`
        }
        result += `Plants in storage: `
        this.storage.forEach((p) => {
           result += `${p.plantName} (${p.quantity}), `
        });
        return result.trim().replace(/,*$/,'');
    };
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

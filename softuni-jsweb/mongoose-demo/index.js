const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

catSchema.methods.sayHi = function() {
    console.log(`I am ${this.name}, and I am ${this.breed} cat`);
}

catSchema.virtual('info').get(function() {
    return `${this.name} - ${this.breed} - ${this.age}`;
});

const Cat = mongoose.model('Cat', catSchema);

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/cat-shelter');

    console.log('Db connected...');
    const gato = await cats();
    gato.forEach(cat => {
        cat.sayHi();
        console.log(cat.info);
    });

    // await updateCat('Pesho', 'Magareto');
    // await saveCats('Pepi', 4, 'ulichna');
}

async function saveCats(name, age, breed) {
    const cat = new Cat({
        name,
        age,
        breed
    });

    await cat.save();
}

async function cats() {
    const cats = await Cat.find();
    console.log(cats);
    return cats;
}

async function updateCat(name, newName) {
    await Cat.updateOne({ name }, { name: newName });

}

main();
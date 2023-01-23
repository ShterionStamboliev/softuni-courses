const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});
const Cat = mongoose.model('Cat', catSchema);

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/cat-shelter');

    console.log('Db connected...');
    await saveCats('Pepi', 4, 'ulichna')

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
}
main();
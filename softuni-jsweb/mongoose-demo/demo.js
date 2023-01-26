const db = require('mongoose');

const playerSchema = new db.Schema({
    name: String,
    age: Number,
    position: String,
});

const Player = db.model('Player', playerSchema);

async function start() {
    db.set('strictQuery', false);
    await db.connect('mongodb://127.0.0.1:27017/football-team');

    console.log('Database connected...');

    const findDb = await Player.find();
    console.log(findDb);

    await createPlayer('Pesho', 20, 'attacker');


}
start();

async function createPlayer(name, age, position) {

    const player = new Player({
        name,
        age,
        position,
    });

    await player.save();
}

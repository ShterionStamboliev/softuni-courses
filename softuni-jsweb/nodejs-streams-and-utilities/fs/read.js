const fs = require('fs');

// const text = fs.readFileSync('./data.txt', { encoding: 'utf-8'});
// console.log(text);

const asyncText = fs.readFile('./data.txt', { encoding: 'utf-8'}, (error, data) => {
    if (error) {
        return;
    }

    console.log(data);
});

console.log('Reading from file...');
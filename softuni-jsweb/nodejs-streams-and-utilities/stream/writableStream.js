const fs = require('fs');

const writeStream = fs.createWriteStream('./output.txt', { encoding: 'utf-8'});

const chunkOne = 'Pesho';
const chunkTwo = 'Gosho';
const chunkThree = 'Tosho';

writeStream.write(chunkOne + '\n');
writeStream.write(chunkTwo + '\n');
writeStream.write(chunkThree + '\n');

writeStream.on('close', () => {
    console.log('Stream closed');
});
writeStream.end();
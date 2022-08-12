function printDna(input) {
    let text = 'ATCGTTAGGG'.split('');
    let box = [];

    for (let i = 0; i < input; i++) {
        let [first, second] = text.splice(0, 2);
        i % 4 === 0 ? box.push(`**${first}${second}**`) : ''
        i % 4 === 1 ? box.push(`*${first}--${second}*`) : ''
        i % 4 === 2 ? box.push(`${first}----${second}`) : ''
        i % 4 === 3 ? box.push(`*${first}--${second}*`) : ''
        text.length === 0 ? text = 'ATCGTTAGGG'.split('') : ''
    }
    console.log(box.join('\n'));
}
printDna(10);



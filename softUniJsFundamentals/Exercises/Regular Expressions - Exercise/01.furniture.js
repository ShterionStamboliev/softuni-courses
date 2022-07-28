function furniture(input) {
    let sum = 0;
    let pattern = />>(?<item>[A-Z]{1}[A-Za-z]{1,})<<(?<price>[0-9.]+)!(?<multiplier>\d+)/g;
    let command = input.shift();
    let box = [];

    while (command !== 'Purchase') {
        let match = pattern.exec(command);
        
        if (match != null) {
            box.push(match.groups['item']);
            sum += Number(match.groups['price'] * Number(match.groups['multiplier']));
        }
        match = pattern.exec(command)
        command = input.shift();
    }
    console.log('Bought furniture:');

    if (box.length > 0) {
        console.log(box.join('\n'));
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
function deserializeString(input) {
    let box = [];

    for (let i = 0; i < input.length; i++) {
        let currentInput = input[i];
        if (currentInput === 'end') {
            break;
        }
        let [currentChar, currentIndex] = currentInput.split(':');
        currentIndex = currentIndex.split('/').map(Number).join(' ');
        box.push(currentIndex);
        box.sort((a, b) => a - b);

        // for (let j = 0; j < box.length; j++) {
        //     if (j % 2 === 0) {
        //         box[j] = currentChar;
        //     } 
        //     if (j % 2 !== 0) {
        //         box[j] = currentChar;
        //     }
        // }
        
    }
    console.log(box.join(''));
}
deserializeString(['a:0/2/4/6','b:1/3/5','end']);
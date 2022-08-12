function animal(input) {
    let animals = input[0];

    if (animals == 'dog') {
        console.log('mammal');
    } else if (animals == 'crocodile' || animals == 'tortoise' || animals == 'snake') {
        console.log('reptile');
    } else if (animals == 'cat') {
        console.log('unknown');
    }
}
animal(['dog']);
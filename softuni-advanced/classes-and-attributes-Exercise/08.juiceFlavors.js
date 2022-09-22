function juice(input) {
    const bottles = {};
    const juices = new Map();

    input.forEach(p => {
        let [fruit, qtity] = p.split(' => ');
        qtity = +qtity;
        if (!bottles[fruit]) {
            bottles[fruit] = 0;
        }
        bottles[fruit] += qtity;

        if (bottles[fruit] >= 1000) {
            if (!juices.has(fruit)) {
                juices.set(fruit, 0);
            }
            juices.set(fruit, juices.get(fruit) + Math.floor(bottles[fruit] / 1000));
            bottles[fruit] %= 1000;
        }
    });
    for (const [f, j] of juices) {
        console.log(`${f} => ${j}`);
    } 
}
juice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);

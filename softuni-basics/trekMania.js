function trek(input) {
    let index = 0;
    let numOfGroups = Number(input[index]);
    index++;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < numOfGroups; i++) {
        let amountOfPeople = Number(input[index]);
        index++;

        if (amountOfPeople <= 5) {
            musala += amountOfPeople;
        } else if (amountOfPeople > 5 && amountOfPeople <= 12) {
            monblan += amountOfPeople;
        } else if (amountOfPeople >= 13 && amountOfPeople <= 25) {
            kilimandjaro += amountOfPeople;
        } else if (amountOfPeople >= 26 && amountOfPeople <= 40) {
            k2 += amountOfPeople;
        } else if (amountOfPeople >= 41) {
            everest += amountOfPeople;
        }
    }
    let totalAmountOfClimbers = musala + monblan + kilimandjaro + k2 + everest;

    console.log(`${((musala / totalAmountOfClimbers) * 100).toFixed(2)}%`);
    console.log(`${((monblan / totalAmountOfClimbers) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaro / totalAmountOfClimbers) * 100).toFixed(2)}%`);
    console.log(`${((k2 / totalAmountOfClimbers) * 100).toFixed(2)}%`);
    console.log(`${((everest / totalAmountOfClimbers) * 100).toFixed(2)}%`);
}   


trek(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);






// •	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
// •	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]


// •	Група до 5 човека – изкачват Мусала - 1 + 5 = 6
// •	Група от 6 до 12 човека – изкачват Монблан - 10 + 12 = 22
// •	Група от 13 до 25 човека – изкачват Килиманджаро - 17
// •	Група от 26 до 40 човека –  изкачват К2 - 26 + 37 + 40 = 103
// •	Група от 41 или повече човека – изкачват Еверест - 78 + 100 = 178

// •	Първи ред - процентът изкачващи Мусала
// •	Втори ред – процентът изкачващи Монблан
// •	Трети ред – процентът изкачващи Килиманджаро
// •	Четвърти ред – процентът изкачващи К2
// •	Пети ред – процентът изкачващи Еверест

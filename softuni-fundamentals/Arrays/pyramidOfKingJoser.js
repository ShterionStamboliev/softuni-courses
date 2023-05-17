function pyramid(base, inc) {
    let stoneUsed = 0;
    let marbleUsed = 0;
    let lapisUsed = 0;
    let goldUsed = 0;
    let step = 0;
    let currentBase = base;
    let height = 0;

    while(currentBase > 2) {
        let curMarble = (currentBase * 4) - 4;
        let curStone = (currentBase * currentBase) - curMarble;
        stoneUsed += curStone;
        step++;
        currentBase -= 2;
    
    if (step % 5 === 0) {
        lapisUsed += curMarble;
    } else {
        marbleUsed += curMarble;
    }
}
    step++;
    let gold = currentBase * currentBase;

    console.log(`Stone required: ${Math.ceil(stoneUsed * inc)}`);
    console.log(`Marble required: ${Math.ceil(marbleUsed * inc)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisUsed * inc)}`);
    console.log(`Gold required: ${Math.ceil(gold * inc)}`);
    console.log(`Final pyramid height: ${Math.floor(step * inc)}`);
}
pyramid(23, 0.5)


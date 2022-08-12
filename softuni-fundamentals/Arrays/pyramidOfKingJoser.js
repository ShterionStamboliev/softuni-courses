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

    stoneUsed = Math.ceil(stoneUsed * inc);
    marbleUsed = Math.ceil(marbleUsed * inc);
    lapisUsed = Math.ceil(lapisUsed * inc);
    goldUsed = Math.ceil(gold * inc);
    height = Math.floor(step * inc);

    console.log(`Stone required: ${stoneUsed}`);
    console.log(`Marble required: ${marbleUsed}`);
    console.log(`Lapis Lazuli required: ${lapisUsed}`);
    console.log(`Gold required: ${goldUsed}`);
    console.log(`Final pyramid height: ${height}`);
}
pyramid(23, 0.5)


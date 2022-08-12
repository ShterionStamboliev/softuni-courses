function housePainting(input) {
    const x = Number(input[0]);
    const y = Number(input[1]);
    const h = Number(input[2]);
    let greenPaintLiters = 0;
    let redPaintLiters = 0;

    let sideWall = x * y;
    let window = 1.5 * 1.5;
    let sides = (2 * sideWall) - (2 * window);
    let backWall = x * x;
    let entrance = 1.2 * 2;
    let frontAndBack = (2 * backWall) - entrance;
    let totalArea = sides + frontAndBack;
    greenPaintLiters = totalArea / 3.4;

    let roof = 2 * (x * y);
    let roofTriangle = 2 * (x * h) / 2;
    let roofTotalArea = roof + roofTriangle;
    redPaintLiters = roofTotalArea / 4.3;
    console.log(greenPaintLiters.toFixed(2));
    console.log(redPaintLiters.toFixed(2));
}
// housePainting(['6','10','5.2']);
housePainting(['10.25','15.45','8.88']);
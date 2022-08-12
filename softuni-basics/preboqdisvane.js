function repair(input) {
    const nylon = 1.5;
    const paint = 14.5;
    const thinner = 5;
    const extraPaint = 0.1;
    const bagCost = 0.40;
    const extraNylon = 2;
    const nylonQuantity = Number(input[0]);
    const paintQuantity = Number(input[1]);
    const thinnerQuantity = Number(input[2]);
    const hoursWork = Number(input[3]);
    const nylonCost = (nylonQuantity + extraNylon) * nylon;
    const paintCost = (paintQuantity + (paintQuantity * extraPaint)) * paint;
    const thinnerCost = thinnerQuantity * thinner;
    const totalSum = nylonCost + paintCost + thinnerCost + bagCost;
    const workerSum = totalSum * 0.3 * hoursWork;
    const totalWorkCost = totalSum + workerSum;
    console.log(totalWorkCost);
}

repair(["10", "11", "4", "8"]);
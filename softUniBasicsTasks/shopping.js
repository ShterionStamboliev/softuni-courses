function shopping(input) {
    const budget = Number(input[0]);
    const videocardsQuantity = Number(input[1]);
    const processorQuantity = Number(input[2]);
    const ramQuantity = Number(input[3]);
    const videocards = 250;
    let videocardsCost = videocardsQuantity * videocards;
    let processorCost = (videocardsCost * 0.35);
    let ramCost = (videocardsCost * 0.1);
    let totalSum = videocardsCost + processorCost * processorQuantity + ramCost * ramQuantity;
    
    if (videocardsQuantity > processorQuantity) {
        totalSum *= 0.85;
    } 
    let finalSum = Math.abs(totalSum - budget).toFixed(2);
    
    if (totalSum <= budget) {
        console.log(`You have ${finalSum} leva left!`);
    } else {
        console.log(`Not enough money! You need ${finalSum} leva more!`);
    }
}
// shopping(['900','2','1','3']);
shopping(['920.45','3','1','1']);


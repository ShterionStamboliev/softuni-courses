function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let percent = Number(input[2]);
    let interest = (depositSum * percent) / 100;
    let interestPerMonth = interest / 12;
    let sum = depositSum + period * interestPerMonth;
    console.log(sum);
}
depositCalculator(["200", "3", "5.7"]);
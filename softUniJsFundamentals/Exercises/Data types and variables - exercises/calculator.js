function calculator(num1, str, num2){
    if (str === '+') {
        console.log(Number(num1 + num2).toFixed(2));
    } else if (str === '-') {
        console.log(Number(num1 - num2).toFixed(2));
    } else if (str === '/') {
        console.log(Number(num1 / num2).toFixed(2));
    } else if (str === '*') {
        console.log(Number(num1 * num2).toFixed(2));
    }
}
calculator(25.5,
    '-',
    3
    );
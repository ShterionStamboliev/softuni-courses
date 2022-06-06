function rounding(num1, num2){
    let first = Number(num1);
    let second = Number(num2);
    if (second > 15) {
        second = 15;
    }
    first = first.toFixed(second)
    console.log(parseFloat(first));
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5333, 3);

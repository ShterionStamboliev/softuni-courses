function invalidNum(input) {
    const num1 = Number(input[0]);

    if (num1 === 0 || num1 >= 100 && num1 <= 200) {
        console.log('');
    } else {
        console.log('invalid');
    }
}   
invalidNum(['220']);
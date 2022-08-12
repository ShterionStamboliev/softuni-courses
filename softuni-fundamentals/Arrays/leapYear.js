function leapYear(num) {
    let n = Number(num);
    if ((n % 4 === 0) && (n % 100 !== 0) || (n % 400 === 0)) {
        console.log(`yes`);
    } else {
        console.log(`no`)
    }
}
leapYear(1984);
leapYear(2003);
leapYear(4);
leapYear(1900);


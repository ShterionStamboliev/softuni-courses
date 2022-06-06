function specialNumbers(n) {
    let sum = 0;
    let str = '';

    for (let i = 1; i <= n; i++) {
        i = i.toString();
        
        for (let j = 0; j < i.length;j++) {
            sum += Number(i[j]);
        }
        str = sum === 5 || sum === 7 || sum === 11;
        console.log(str ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }
}
specialNumbers(20);

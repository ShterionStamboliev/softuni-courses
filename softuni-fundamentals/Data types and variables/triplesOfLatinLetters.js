function latinLetters(n){
    let str = '';

    for (let i = 0; i < n; i++) {
        str += String.fromCharCode(97+i)
        for(let j = 0; j < n; j++) {
            str += String.fromCharCode(98+j)
            for (let k = 0; k < n; k++){
                str += String.fromCharCode(99+k)
                console.log(`${str[i]}${str[j]}${str[k]}`);
            }
        }
    }
}
latinLetters(2);
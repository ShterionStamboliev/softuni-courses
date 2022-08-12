function biggestOfThree(a,b,c){
    let biggest;

    if (a > b && a > c) {
        biggest = a;    
    } else if (b > a && b > c) {
        biggest = b;
    } else if (c > a && c > b) {
        biggest = c;
    } else if (a === b && a === c || b === a && b === c || c === a && c === b) {
        biggest = a;
    }
    console.log(biggest);
}
biggestOfThree(-2,7,3);

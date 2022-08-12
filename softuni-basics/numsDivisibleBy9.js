function numsDivisibleBy9(input) {
    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    let sum = 0;
    let sumB = '';

    for (let i = n1; i <= n2; i++) {
        if (i % 9 == 0) {
            sum += i;   
            sumB += `${i}\n`;     
        }    
    }   
    console.log(`The sum: ${sum}`); 
    console.log(sumB);
}
    


numsDivisibleBy9(['100','200']);
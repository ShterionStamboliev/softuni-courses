function smallestTwoNumbers(arr){
    let arg = arr.sort((a, b) => a - b).slice(0, 2).join(' ')
    console.log(arg);
}
smallestTwoNumbers([30, 15, 50, 5]);
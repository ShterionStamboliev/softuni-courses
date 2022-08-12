function sumFirstAndLast(arr){
    arr = arr.map(Number)
    let first = arr.shift()
    let second = arr.pop()
    return first + second;
}
sumFirstAndLast(['20', '30', '40']);
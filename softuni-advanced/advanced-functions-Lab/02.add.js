function solution(n) {

    return function(a) {
        return a + n;
    }
}
let add7 = solution(7);
console.log(add7(2))
console.log(add7(3))




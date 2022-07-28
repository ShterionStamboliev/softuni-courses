function cutAndReverse(input) {
    let len = input.length;
    let firstHalf = input.slice(0, len / 2).split('').reverse().join('');
    let secondHalf = input.slice(-len / 2).split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
function sumOfNumbers(...nums) {
    let res = 0;
    for (let i = Number(nums[0]); i <= Number(nums[1]); i++) {
        res += Number(i);
    }
    console.log(res);
}
sumOfNumbers('1','5');
function mathOperations(...nums) {
    let result = 0;
    switch(nums[2]) {
        case "+": result = Number(nums[0] + nums[1]); break;
        case "-": result = Number(nums[0] - nums[1]); break;
        case "/": result = Number(nums[0] / nums[1]); break;
        case "*": result = Number(nums[0] * nums[1]); break;
        case "%": result = Number(nums[0] % nums[1]); break;
        case "**": result = Number(nums[0] ** nums[1]); break;
    }
    console.log(result);
}
mathOperations(5, 6, '+');

function jan(arr) {

    let nums = [];

    arr.forEach((n, i) => {
        if (+n) {
            nums.push(+n);
        } else {
            apply(nums, arr[i]);
        }
    });

    if (nums.length >= 2) {
        console.log('Error: too many operands!');
    } else if (nums.length !== 0) {
        console.log(nums.join(' '));
    };

    function apply(operand, operator) {
        if (operand.length < 2) {
            console.log('Error: not enough operands!');
        }
        if (operator === '+') {
            operand[operand.length - 2] = operand[operand.length - 2] + operand[operand.length - 1];
            operand.splice(-1, 1);
        } else if (operator === '-') {
            operand[operand.length - 2] = operand[operand.length - 2] - operand[operand.length - 1];
            operand.splice(-1, 1);
        } else if (operator === '*') {
            operand[operand.length - 2] = operand[operand.length - 2] * operand[operand.length - 1];
            operand.splice(-1, 1);
        } else if (operator === '/') {
            operand[operand.length - 2] = operand[operand.length - 2] / operand[operand.length - 1];
            operand.splice(-1, 1);
        };
    };
};
// jan([31,2,'+',11,'/']);
jan([-1,1,'+',101,'*', 18,'+',3,'/']);
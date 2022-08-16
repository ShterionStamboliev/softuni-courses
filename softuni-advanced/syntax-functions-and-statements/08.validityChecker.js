function validityChecker(...input) {
    const firstResult = (Math.sqrt(Math.pow((input[0] - 0), 2) + Math.pow((input[1] - 0), 2)));
    const secondResult = (Math.sqrt(Math.pow((input[2] - 0), 2) + Math.pow((input[3] - 0), 2)));
    const thirdResult = (Math.sqrt(Math.pow((input[2] - input[0]), 2) + Math.pow((input[3] - input[1]), 2)));
    console.log(Number.isInteger(firstResult) ? `{${input[0]}, ${input[1]}} to {${0}, ${0}} is valid` : `{${input[0]}, ${input[1]}} to {${0}, ${0}} is invalid`);
    console.log(Number.isInteger(secondResult) ? `{${input[2]}, ${input[3]}} to {${0}, ${0}} is valid` : `{${input[2]}, ${input[3]}} to {${0}, ${0}} is invalid`)
    console.log(Number.isInteger(thirdResult) ? `{${input[0]}, ${input[1]}} to {${input[2]}, ${input[3]}} is valid` : `{${input[0]}, ${input[1]}} to {${input[2]}, ${input[3]}} is invalid`);
}   
validityChecker(2, 1, 1, 1);
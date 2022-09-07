function calculator() {
    let inputOne;
    let inputTwo;
    let resultField;

    const init = (nOne, nTwo, res) => {
        inputOne = document.querySelector(nOne);
        inputTwo = document.querySelector(nTwo);
        resultField = document.querySelector(res);
    }

    const add = () => document.getElementById('result').value 
    = Number(inputOne.value) + Number(inputTwo.value); 

    const subtract = () => document.getElementById('result').value
    = Number(inputOne.value) - Number(inputTwo.value);

    return {
        init,
        add,
        subtract
    }
}
const calculate = calculator();    
calculate.init('#num1', '#num2', '#result'); 






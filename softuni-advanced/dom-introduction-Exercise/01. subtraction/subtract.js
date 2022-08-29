function subtract() {
    let finalSum = Number(document.getElementById('firstNumber').value) - Number(document.getElementById('secondNumber').value)
    document.getElementById('result').textContent = finalSum;
}
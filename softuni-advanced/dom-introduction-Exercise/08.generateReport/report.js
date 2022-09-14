function generateReport() {
    let tableHead = [...document.getElementsByTagName('input')]
    let employeesData = [...document.querySelectorAll('tbody tr')];
    let textOutput = document.getElementById('output');
    let checkBox = [];
    let allEmployees = [];


    tableHead.forEach((check, col) => {
        if (check.checked === true) {
            checkBox.push(col);
        }
    });

    employeesData.forEach((_, i) => {
        let arr = Array.from(employeesData[i].children);
        let employeeInfo = {};

        checkBox.forEach((_, j) => {
            let columnName = tableHead[checkBox[j]].name.toLowerCase();
            let columnValue = arr[checkBox[j]].textContent;
            employeeInfo[columnName] = columnValue;
        });
        allEmployees.push(employeeInfo);
    });
    textOutput.textContent = JSON.stringify(allEmployees);
}

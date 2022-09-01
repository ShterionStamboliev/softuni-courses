<<<<<<< HEAD
function generateReport() {
    let tableHead = Array.from(document.getElementsByTagName('input'))
    let employeesData = Array.from(document.querySelectorAll('tbody tr'));
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
=======
function generateReport() {
    let tableHead = Array.from(document.getElementsByTagName('input'))
    let employeesData = Array.from(document.querySelectorAll('tbody tr'));
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
>>>>>>> 8e62e8dd859c43444a795f5030eee3f00e03ad7b

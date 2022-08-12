function salary(input) {
    let index = 0;
    let tabs = Number(input[index]);
    index++;

    let salary = Number(input[index]);
    index++;

    let haveSalary = true;

    for (let i = 0; i <= tabs; i++) {
        let currentTab = input[index];
        index++;

        if (currentTab == 'Facebook') {
            salary -= 150;
        } else if (currentTab == 'Instagram') {
            salary -= 100;
        } else if (currentTab == 'Reddit') {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            haveSalary = false;
            break;
        }
    }

    if (haveSalary) {
        console.log(salary);
    }
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])

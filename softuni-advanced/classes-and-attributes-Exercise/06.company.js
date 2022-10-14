class Company {
    constructor() {
        this.departments = {};
        this.currentEmployee = [];
    }
    addEmployee(name, salary, position, department) {
        this.currentEmployee.push(name, salary, position, department);
        for (const info of this.currentEmployee) {
            if (!info || salary < 0) {
                throw new Error('Invalid input!');
            } 
        };

        if(!this.departments[department]) {
            this.departments[department] = [];
        }
            this.departments[department].push({name, salary, position});
            return `New employee is hired. Name: ${name}. Position: ${position}`
    };

    bestDepartment() {
        let minSal = Number.MIN_SAFE_INTEGER;

        for (const val of Object.values(this.departments)) {
            let avg = val.reduce((a, b) => a + b.salary, 0) / val.length;
            // console.log(avg);
            if (avg > minSal) {
                minSal = avg;
            }
        }
        for (const key of Object.keys(this.departments)) {
            // console.log(key);
            return `Best Department is: ${key}\nAverage salary: ${minSal.toFixed(2)}\n${this.departments[key]
                .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
                .map(n => `${n.name} ${n.salary} ${n.position}`)
                .join('\n')}`
        };
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


function solve() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.dividend = 0;
            this.tasks = [];
        };
        work() {
            this.tasks.push(this.tasks.shift());
        };
        collectSalary() {
            let finalSalary = 0;
            if (this.dividend) {
                finalSalary = this.dividend + this.salary;
            } else {
                finalSalary = this.salary;
            }
        };
    };
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            const juniorTasks = [`${this.name} is working on a simple task.`]
            super.tasks = juniorTasks;
        };
    };
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            const seniorTasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`
            ];
            super.tasks = seniorTasks;
        };
    };
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            const managerTasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ];
            this.tasks = managerTasks;
        };
    };
    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}
const classes = solve(); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();  
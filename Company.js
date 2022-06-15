class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if ((name === "" || name === null || name === undefined) || (position === "" || position === null || position === undefined) || (department === "" || department === null || department === undefined) || (salary === "" || salary === null || salary === undefined) || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
            let currEmp = new Object();
            currEmp.name = name;
            currEmp.salary = salary;
            currEmp.position = position;
            this.departments[department].push(currEmp);
            return `New employee is hired. Name: ${currEmp.name}. Position: ${currEmp.position}`;
        } else {
            let currEmp = new Object();
            currEmp.name = name;
            currEmp.salary = salary;
            currEmp.position = position;
            this.departments[department].push(currEmp);
            return `New employee is hired. Name: ${currEmp.name}. Position: ${currEmp.position}`;
        }
    }

    bestDepartment() {
        let depData = Object.entries(this.departments);

        for (let d = 0; d < depData.length; d++) {
            let avgSal = 0;
            for (let emp of depData[d][1]) {
                avgSal += emp.salary;
            }
            depData[d].avgSalary = avgSal / depData[d][1].length;

        }

        depData.sort((a, b) => b.avgSalary - a.avgSalary);
        let sortedEmps = Object.entries(depData[0][1]);
        sortedEmps.sort((a, b) => a[1].name.localeCompare(b[1].name));
        sortedEmps.sort((a, b) => b[1].salary - a[1].salary);
        let empsToDisplay = [];
        for (let em of sortedEmps) {
            empsToDisplay.push(Object.values(em[1]).join(" "));
        }

        return `Best Department is: ${depData[0][0]}\nAverage salary: ${depData[0].avgSalary.toFixed(2)}\n${empsToDisplay.join("\n")}`;
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



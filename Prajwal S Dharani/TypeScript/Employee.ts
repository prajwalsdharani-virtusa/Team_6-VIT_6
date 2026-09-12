import * as readline from "readline";

interface Employee {
    id: number;
    name: string;
    sal: number;
}

let employees: Employee[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addEmp(employee: Employee): void {
    employees.push(employee);
    console.log("Employee added successfully.");
}

function getEmp(): Employee[] {
    return employees;
}

function updateEmp(id: number, name: string, sal: number): void {
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        employee.name = name;
        employee.sal = sal;
        console.log("Employee updated successfully.");
    } else {
        console.log("Employee not found.");
    }
}

function deleteEmp(id: number): void {
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        employees = employees.filter(emp => emp.id !== id);
        console.log("Employee deleted successfully.");
    } else {
        console.log("Employee not found.");
    }
}

function menu(): void {
    console.log("Employee System");
    console.log("1. Add Employee");
    console.log("2. View Employees");
    console.log("3. Update Employee");
    console.log("4. Delete Employee");
    console.log("5. Exit");

    rl.question("Enter your choice: ", (choice) => {

        switch (choice) {

            case "1":
                rl.question("Enter employee ID: ", (id) => {
                    rl.question("Enter employee name: ", (name) => {
                        rl.question("Enter salary: ", (sal) => {

                            addEmp({
                                id: Number(id),
                                name: name,
                                sal: Number(sal)
                            });

                            menu();
                        });
                    });
                });
                break;

            case "2":
                console.log("Employees:", getEmp());
                menu();
                break;

            case "3":
                rl.question("Enter employee ID: ", (id) => {
                    rl.question("Enter new name: ", (name) => {
                        rl.question("Enter new salary: ", (sal) => {

                            updateEmp(
                                Number(id),
                                name,
                                Number(sal)
                            );

                            menu();
                        });
                    });
                });
                break;

            case "4":
                rl.question("Enter employee ID to delete: ", (id) => {

                    deleteEmp(Number(id));

                    menu();
                });
                break;

            case "5":
                console.log("Program ended.");
                rl.close();
                break;

            default:
                console.log("Invalid choice.");
                menu();
        }
    });
}

menu();
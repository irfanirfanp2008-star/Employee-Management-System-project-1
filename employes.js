
// Employee array
export let employees = [
    { id: 1, name: "Arun", age: 25, salary: 25000, department: "IT" },
    { id: 2, name: "Rahul", age: 28, salary: 35000, department: "HR" },
    { id: 3, name: "Ajay", age: 24, salary: 20000, department: "Finance" },
    { id: 4, name: "Anu", age: 26, salary: 30000, department: "IT" }
];

// Export display function
export function displayEmployees() {

    let output = "";

    for (let i = 0; i < employees.length; i++) {

        output += `
            <div>
                <h3>${employees[i].name}</h3>
                <p>ID: ${employees[i].id}</p>
                <p>Age: ${employees[i].age}</p>
                <p>Salary: ₹${employees[i].salary}</p>
                <p>Department: ${employees[i].department}</p>
                <hr>
            </div>
        `;
    }

    document.getElementById("employeeList").innerHTML = output;
}
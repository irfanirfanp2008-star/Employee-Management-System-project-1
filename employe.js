let employees = [
    { id: 1, name: "Arun", age: 25, salary: 25000, department: "IT", active: true },
    { id: 2, name: "Rahul", age: 28, salary: 35000, department: "HR", active: true },
    { id: 3, name: "Ajay", age: 24, salary: 20000, department: "IT", active: false },
    { id: 4, name: "John", age: 30, salary: 45000, department: "Finance", active: true },
    { id: 5, name: "Vishnu", age: 27, salary: 30000, department: "IT", active: true }
];

// // function display(){
// //     let data = ""

// //     for(let i=0;i<employees.length; i++){
// //         data+=employees[i].name +"<br>"
// //     } 
// //   document.getElementById("Employenames").innerHTML ="Employe Names :"+"<br>"+data
// // }
// // display()    
// // let toggle = employees.map((emp, index) => emp.name.toUpperCase());
// // console.log(toggle)
// // document.getElementById("empoloyeupper").innerHTML =toggle




// // document.getElementById("department").innerHTML = dep.map((emp) => `<p>${emp.name} - ${emp.department}</p>`).join('');

// // let inactivel=employees.filter((empa)=>empa.active==false)
// // document.getElementById("inactive").innerHTML = inactivel.map((emp) => `<p>${emp.name} - ${emp.active}</p>`).join('');

// // let slicer = employees.slice(0, 3);
// // document.getElementById("slice").innerHTML = slicer.map((emp) => `<p>${emp.name}</p>`).join("");


// // let copy =[...employees];
// // document.getElementById("copy").innerHTML = copy.map((emp) => `<p>Copyed :<br>id:${emp.id}, name:${emp.name}, age:${emp.age}, salary:${emp.salary}, department:${emp.department}, active:${emp.active}</p>`).join("");

// // let [eid]=employees
// // document.getElementById("destructuring").innerHTML = `<p> destructured : <br>name: ${eid.name}, age: ${eid.age}, salary: ${eid.salary}</p>`;
// // console.log(ename);


function department(){
    let dep=employees.filter((empd)=>empd.department=="IT")
    document.getElementById("department").innerHTML = dep.map((emp) => `<p>${emp.name} - ${emp.department}</p>`).join('');

}

function highsalary(){
let value =employees.filter((emps)=>emps.salary>25000)
document.getElementById("empoloyetops").innerHTML = value.map((emp) => `<p>${emp.name} - ₹${emp.salary}</p>`).join('');
}


const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

function searchEmployee(name) {
    return employees.find(emp => emp.name === name);
}

document.getElementById("search").addEventListener("click", () => {
    const name = searchInput.value.trim();
    const employee = searchEmployee(name);

    if (employee) {
        searchResult.innerHTML = `
            <h3>${employee.name}</h3>
            <p>ID: ${employee.id}</p>
            <p>Age: ${employee.age}</p>
            <p>Salary: ${employee.salary}</p>
            <p>Department: ${employee.department}</p>
            <p>Status: ${employee.active ? "Active" : "Inactive"}</p>
        `;
    } else {
        searchResult.innerHTML = "Employee not found!";
    }
});

let place =document.getElementById("searchInput")
let placeholder=place.getAttribute("placeholder")
place.setAttribute("placeholder","Enter Employe Name")

function employeeWithClass(arr){
    let employees = []
    class Employee {
        constructor(name) {
            this.name = name
            this.PN = name.length
        }
    }
    for (let emp of arr){
        employees.push(new Employee(emp))
    }
    for (let emp of employees){
        console.log(`Name: ${emp.name} -- Personal Number: ${emp.PN}`)
    }
}

function employeeObject(arr){
    let allEmployees = []

    //Read employees info
    for (const empName of arr) {
        let personalNum = empName.length
        const employee = {
            name: empName,
            PN: personalNum
        }
        allEmployees.push(employee)
    }
    
    //Print employees
    for (const emp of allEmployees) {
        console.log(`Name: ${emp.name} -- Personal Number: ${emp.PN}`)
    }
}


employeeObject([
    'Silas Butler',
    'Adanaa Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
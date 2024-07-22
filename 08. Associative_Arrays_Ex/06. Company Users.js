function solve(input) {
    const companyEmployees = {};
    for (const data of input) {
        let [company, empId] = data.split(" -> ");
        if (companyEmployees.hasOwnProperty(company)) {
            companyEmployees[company].add(empId);
        } else {
            companyEmployees[company] = new Set();
            companyEmployees[company].add(empId);
        }
    }
    let entries = Object.entries(companyEmployees);
    entries.sort(([keyA, valA], [keyB, valB]) => {
        return keyA.localeCompare(keyB);
    });
    let set = new Set()
    for (const ent of entries) {
        console.log(ent[0])
        let vals = ent[1].values()
        for (const val of vals) {
            console.log(`-- ${val}`)
        }     
    }
}

solve([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345",
]);

function phone(arr){
    const phonebook = {}
    for (const data of arr) {
        let [name, number] = data.split(" ")
        phonebook[name] = number
    }
    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

function meetings(arr){
    const schedule = {}
    for (const data of arr) {
        let [day, name] = data.split(" ")
        if (schedule.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}

function addressBook(arr){
    const addrBook = {}
    for (const data of arr) {
        let [name, address] = data.split(':')
        addrBook[name] = address
    }
    const entries = Object.entries(addrBook)
    entries.sort((a,b) => {
        return a[0].localeCompare(b[0])
    })
    for (const e of entries) {
        console.log(`${e[0]} -> ${e[1]}`);
    }
}

function storage(arr){
    let map = new Map()
    for (const products of arr) {
        let data = products.split(' ')
        let product = data[0]
        let qty = +data[1]
        if (!map.has(product)){
            map.set(product, qty)
        } else {
            map.set(product, map.get(product) + qty)
        }
    }
    for (const entries of map) {
        console.log(`${entries[0]} -> ${entries[1]}`);
    }
}

function schoolGrades(arr){
    let map = new Map()
    for (const string of arr) {
        let token = string.split(' ')
        let name = token.shift()
        let grades = token.map(Number)
        if (!map.has(name)){
            map.set(name, [])
        }
        for (const grade of grades) {
            map.get(name).push(grade)
        }
    }
    let sorted = Array.from(map.entries()).sort((a,b) => a[0].localeCompare(b[0]))
    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${avgGrade(kvp[1]).toFixed(2)}`);

    function avgGrade(grades){
        let sum = 0
        let values = Object.values(grades)
        for (const a of grades) {
            sum += a
        }
        return sum / values.length  
    }}
}

function occurrence(input){
    const obj = {}
    for (const word of input) {
        if (!obj.hasOwnProperty(word)){
            obj[word] = 1
        } else {
            obj[word] += 1
        }
    }
    const entries = Object.entries(obj)
    entries.sort(([keyA, valA], [keyB, valB]) => {
        return valB - valA
    })
    for (const i of entries) {
        console.log(`${i[0]} -> ${i[1]} times`);
    }
}

occurrence(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
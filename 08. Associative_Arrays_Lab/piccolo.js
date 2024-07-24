function solve(input){
    let set = new Set()
    for (const line of input) {
        let [command, carNum] = line.split(', ')
        if (command === "IN"){
            set.add(carNum)
        }
        else if (command === "OUT"){
            set.delete(carNum)
        }
    }
    if (set.size === 0){
        console.log(`Parking Lot is Empty`);
        return
    }
    let sorted = Array.from(set.values()).sort()
    for (const car of sorted) {
        console.log(car);
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])
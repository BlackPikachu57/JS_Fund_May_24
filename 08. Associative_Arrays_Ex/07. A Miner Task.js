function solve(input) {
    let resources = {};
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty = +input[i + 1];
        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = qty;
        } else {
            resources[resource] += qty;
        }
    }
    for (const res in resources) {
        console.log(`${res} -> ${resources[res]}`);
    }
}

solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);

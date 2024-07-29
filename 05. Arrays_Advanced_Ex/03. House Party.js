function solve(input) {
    let guests = [];
    for (const command of input) {
        let tokens = command.split(" ")
        const name = tokens.shift()
        if (tokens.includes("not")) {
            if (!guests.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            }
        } else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        }
    }
    for (const guest of guests) {
        console.log(guest);
    }
}

solve([
    "Tom is going!",
    "Annie is going!",
    "Tom is going!",
    "Garry is going!",
    "Jerry is going!",
    "Jerry is not going!",
"Jerry is not going!"
]);


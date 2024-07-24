function solve(input) {
    let train = input[0].split(" ");
    let maxCapacity = +input[1];
    for (let i = 2; i < input.length; i++) {
        let command = input[i];
        if (command[0] === "A") {
            command = command.split("Add ");
            train.push(command[1]);
        } else {
            command = Number(command);
            for (let j = 0; j < train.length; j++) {
                let passengers = +train[j];
                if (command + passengers <= maxCapacity) {
                    passengers += command;
                    train[j] = passengers;
                    break;
                } else {
                    continue;
                }
            }
        }
    }
    console.log(train.join(" "));
}

//solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
solve(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);

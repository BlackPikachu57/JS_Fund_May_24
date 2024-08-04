function solve(input) {
    const pattern = /([@#]+)(?<color>[a-z]{3,})([@#]+)([^a-zA-Z0-9]*)\/+(?<amount>\d+)\/+/g;
    let info = input[0];
    let tokens = [];
    while (info.match(pattern)) {
        let temp = pattern.exec(info);
        info = info.replace(temp[0], "");
        tokens.push(temp);
    }
    for (const egg of tokens) {
        let color = egg.groups.color;
        let amount = +egg.groups.amount;
        console.log(`You found ${amount} ${color} eggs!`);
    }
}

// solve(["@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/"]);
solve(["#@##@red@#/8/@rEd@/2/#@purple@////10/"]);

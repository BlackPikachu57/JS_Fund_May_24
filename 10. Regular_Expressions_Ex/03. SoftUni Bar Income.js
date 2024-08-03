function solve(input) {
    let totalPrice = 0;
    const pattern = /%([A-Z][a-z]+)%<(\w+)>(\w*)\|(\d+)\|\3(\d+.\d+|\d+)\$/g;
    for (const line of input) {
        if (line === "end of shift") {
            break;
        }
        if (!line.match(pattern)) {
            continue;
        }
        let currentPrice = 0;
        let tokens = pattern.exec(line);
        if (isNaN(Number(tokens[3])) || tokens[3] === "") {
            tokens.splice(3, 1);
        }
        currentPrice += +tokens[3] * +tokens[4];
        totalPrice += currentPrice;
        console.log(`${tokens[1]}: ${tokens[2]} - ${currentPrice.toFixed(2)}`);
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

solve([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift",
]);

solve([
    "%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift",
]);

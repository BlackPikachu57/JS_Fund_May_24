function solve(input) {
    const pattern =
        /(#|\|)(?<itemName>[A-z\s]+)\1(?<expirationDate>(\d{2})\/(\d{2})\/(\d{2}))\1(?<calories>\d{0,10000})\1/g;
    let info = input[0];
    let tokens = [];
    while (info.match(pattern)) {
        let temp = pattern.exec(info);
        info = info.replace(temp[0], "");
        tokens.push(temp);
    }
    let calories = 0;
    for (const food of tokens) {
        calories += +food.groups.calories;
    }
    const survive = Math.floor(calories / 2000);
    if (survive > 0) {
        console.log(`You have food to last you for: ${survive} days!`);
        for (const food of tokens) {
            console.log(
                `Item: ${food.groups.itemName}, Best before: ${food.groups.expirationDate}, Nutrition: ${food.groups.calories}`
            );
        }
    } else {
        console.log(`You have food to last you for: ${survive} days!`);
    }
}

// solve([
//     "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
// ]);
// solve([
//     "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
// ]);
solve(["Hello|#Invalid food#19/03/20#450|$5*(@"]);

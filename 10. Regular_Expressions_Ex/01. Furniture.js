function solve(input) {
    const pattern = /(>>)([A-Z]+[a-z]*)(<<)(\d+|\d+.\d+)!(\d+)/g;
    let boughtFurniture = [];
    let result = 0;
    for (const command of input) {
        if (command === "Purchase") {
            break;
        }
        let spliten = null;
        if (command.match(pattern)) {
            spliten = command.split(/[><!]+/);
        } else {
            continue;
        }
        const furniture = spliten[1];
        const price = +spliten[2];
        const qty = +spliten[3];
        boughtFurniture.push(furniture);
        result += price * qty;
    }
    console.log(`Bought furniture:`);
    for (const furniture of boughtFurniture) {
        console.log(furniture);
    }
    console.log(`Total money spend: ${result.toFixed(2)}`);
}

// solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
// solve([
//     ">>Laptop<<312.2323!3",
//     ">>TV<<300.21314!5",
//     ">Invalid<<!5",
//     ">>TV<<300.21314!20",
//     ">>Invalid<!5",
//     ">>TV<<30.21314!5",
//     ">>Invalid<<!!5",
//     "Purchase",
// ]);

solve([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);

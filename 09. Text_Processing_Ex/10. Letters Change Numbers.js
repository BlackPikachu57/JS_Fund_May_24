function solve(str) {
    const tokens = str.split(/ +/);
    let result = 0;
    const lowerCase = /[a-z]/;
    const upperCase = /[A-Z]/;
    for (const command of tokens) {
        const comLength = command.length;
        let tempResult = 0;
        const number = Number(command.substring(1, comLength - 1));
        const firstLetterPosition = command[0].toUpperCase().charCodeAt() - 64;
        const lastLetterPosition =
            command[comLength - 1].toUpperCase().charCodeAt() - 64;
        if (!command[0].search(lowerCase)) {
            tempResult += number * firstLetterPosition;
        } else if (!command[0].search(upperCase)) {
            tempResult += number / firstLetterPosition;
        }
        if (!command[comLength - 1].search(lowerCase)) {
            tempResult += lastLetterPosition;
        } else if (!command[comLength - 1].search(upperCase)) {
            tempResult -= lastLetterPosition;
        }
        result += tempResult;
    }
    console.log(result.toFixed(2));
}

solve("A12b s17G");
solve("P34562Z q2576f    H456z");
solve("a1A");

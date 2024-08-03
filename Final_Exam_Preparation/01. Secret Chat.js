function solve(input) {
    let message = input.shift();
    for (const command of input) {
        let tokens = command.split(":|:");
        const operation = tokens[0];
        if (operation === "Reveal") {
            break;
        }
        switch (operation) {
            case "InsertSpace": {
                const index = +tokens[1];
                let sub1 = message.substring(0, index);
                let sub2 = message.substring(index);
                message = sub1.concat(" ", sub2);
                console.log(message);
                break;
            }
            case "Reverse": {
                const reversible = tokens[1];
                if (message.includes(reversible)) {
                    const index = message.indexOf(reversible);
                    let reversed = message
                        .substring(index)
                        .split("")
                        .reverse()
                        .join("");
                    message = message.replace(reversible, reversed);
                    console.log(message);
                } else {
                    console.log("error");
                }
                break;
            }
            case "ChangeAll": {
                // message = message.replaceAll(tokens[1], tokens[2]);
                const chRemove = tokens[1];
                const chReplace = tokens[2];
                while (message.includes(chRemove)) {
                    message = message.replace(chRemove, chReplace);
                }
                console.log(message);
                break;
            }
        }
    }
    console.log(`You have a new text message: ${message}`);
}

solve([
    "Hiware?uiy",
    "ChangeAll:|:i:|:o",
    "Reverse:|:?uoy",
    "Reverse:|:jd",
    "InsertSpace:|:3",
    "InsertSpace:|:7",
    "Reveal",
]);

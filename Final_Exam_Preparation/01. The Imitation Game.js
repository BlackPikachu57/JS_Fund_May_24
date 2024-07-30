function solve(input) {
    let message = input.shift();
    for (const line of input) {
        let tokens = line.split("|");
        const command = tokens[0];
        if (command === "Decode") {
            break;
        }
        switch (command) {
            case "Move": {
                const index = +tokens[1];
                let substr1 = message.substring(0, index);
                let substr2 = message.substring(index);
                message = substr2 + substr1;
                break;
            }
            case "Insert": {
                const index = +tokens[1];
                const value = tokens[2];
                let substr1 = message.substring(0, index) + value;
                let substr2 = message.substring(index);
                message = substr1 + substr2;
                break;
            }
            case "ChangeAll": {
                const chRemove = tokens[1];
                const chReplace = tokens[2];
                while (message.includes(chRemove)) {
                    message = message.replace(chRemove, chReplace);
                }
                break;
            }
        }
    }
    console.log(`The decrypted message is: ${message}`);
}

// solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);

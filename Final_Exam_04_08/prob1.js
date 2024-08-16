function solve(input) {
    let message = input.shift();
    for (const line of input) {
        let tokens = line.split(" ");
        const command = tokens[0];
        switch (command) {
            case "Translate": {
                //Translate {char} {replacement}
                let char = tokens[1];
                let replacement = tokens[2];
                while (message.includes(char)) {
                    message = message.replace(char, replacement);
                }
                console.log(message);
                break;
            }
            case "Includes": {
                let substring = tokens[1];
                if (message.includes(substring)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            }
            case "Start": {
                const givSubstring = tokens[1];
                if (message.startsWith(givSubstring)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                // let substrings = message.split(" ");
                // if (substrings[0] === givSubstring) {
                //     console.log("True");
                // } else {
                //     console.log("False");
                // }
                break;
            }
            case "Lowercase": {
                message = message.toLocaleLowerCase();
                console.log(message);
                break;
            }
            case "FindIndex": {
                const char = tokens[1];
                let index = message.lastIndexOf(char);
                console.log(index);
                break;
            }
            case "Remove": {
                const startIndex = tokens[1];
                const count = tokens[2];
                let sub = message.split("").splice(startIndex, count).join("");
                message = message.replace(sub, "");
                console.log(message);
                break;
            }
        }
    }
}

solve(["//Thi5 I5 MY 5trING!//", "Translate 5 s", "Includes string", "Start //This", "Lowercase", "FindIndex i", "Remove 0 10", "End"]);

solve(["*S0ftUni is the B3St Plac3**", "Translate 2 o", "Includes best", "Start the", "Lowercase", "FindIndex p", "Remove 2 7", "End"]);

function solve(input) {
    const people = [];
    for (const line of input) {
        let person = {};
        let data = line.split(": ");
        let name = data[0];
        let cards = data[1].split(", ");
        if (people.length === 0) {
            person.name = name;
            person.cards = cards;
            people.push(person);
            continue;
        }
        let exist = false
        for (const el of people) {
            exist = false
            if (el.name === name){
                exist = true
                break
            }
        }
        if (exist === false){
            person.name = name;
            person.cards = cards;
            people.push(person);
        } else {
            for (const card of cards) {
                if (!people.cards.include(card)){
                    people.cards.push(card)
                }
            }
        }
        console.log(people)
    }
    /*for (const key in people) {
        for (const elem of people[key]) {
            let number = elem[0];
            let type = elem[1];
            let result = 0;
            switch (number) {
                case "J": {
                    result += 11;
                    break;
                }
                case "Q": {
                    result += 12;
                    break;
                }
                case "K": {
                    result += 13;
                    break;
                }
                case "A": {
                    result += 14;
                    break;
                }
                default: {
                    result += +number;
                    break;
                }
            }
            switch (type) {
                case "S": {
                    result *= 4;
                    break;
                }
                case "H": {
                    result *= 3;
                    break;
                }
                case "D": {
                    result *= 2;
                    break;
                }
            }
            console.log(result);
        }
    }*/
}

solve([
    "Peter: 2C, 4H, 9H, AS, QS",
    "Tomas: 3H, 10S, JC, KD, 5S, 10S",
    "Andrea: QH, QC, QS, QD",
    "Tomas: 6H, 7S, KC, KD, 5S, 10C",
    "Andrea: QH, QC, JS, JD, JC",
    "Peter: JD, JD, JD, JD, JD, JD",
]);

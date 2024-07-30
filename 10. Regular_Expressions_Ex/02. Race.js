function solve(input) {
    let racers = {};
    let tokenRacers = input.shift().split(", ");
    for (const racer of tokenRacers) {
        racers[racer] = 0;
    }
    const pattern = /[@#$%!&^*()\s]/g;
    for (const line of input) {
        if (line === "end of race") {
            break;
        }
        let racerNumber = line.split(pattern).join("").split("");
        let racerName = [];
        let racerDistArr = [];
        for (const ch of racerNumber) {
            if (!isNaN(Number(ch))) {
                racerDistArr.push(+ch);
            } else {
                racerName.push(ch);
            }
        }
        racerName = racerName.join("");
        if (racers[racerName] === undefined) {
            continue;
        }
        let result = 0;
        for (const dist of racerDistArr) {
            result += dist;
        }
        racers[racerName] += result;
    }
    let entries = Object.entries(racers);
    entries = entries.sort(([keyA, valA], [keyB, valB]) => {
        return valB - valA;
    });
    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
}

// solve([
//     "George, Peter, Bill, Tom",
//     "G4e@55or%6g6!68e!!@ ",
//     "R1@!3a$y4456@",
//     "B5@i@#123ll",
//     "G@e54o$r6ge#",
//     "7P%et^#e5346r",
//     "T$o553m&6",
//     "end of race",
// ]);

solve([
    "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
    "Mi*&^%$ch123o!#$%#nne787) ",
    "%$$B(*&&)i89ll)*&) ",
    "R**(on%^&ald992) ",
    "T(*^^%immy77) ",
    "Ma10**$#g0g0g0i0e",
    "end of race",
]);

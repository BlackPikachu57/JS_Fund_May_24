function solve(input) {
    const pattern =
        /\b(?<day>\d{2})([.\/\-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/gm;
    let validDate = null;
    while ((validDate = pattern.exec(input[0])) !== null) {
        let day = validDate.groups["day"];
        let month = validDate.groups["month"];
        let year = validDate.groups["year"];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

solve([
    "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016",
]);

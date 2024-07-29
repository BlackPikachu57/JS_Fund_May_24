function solve(str) {
    const regex = /[A-Z][a-z]*/g;
    const allMatches = str.matchAll(regex);
    const matchWords = [];
    for (const match of allMatches) {
        matchWords.push(match[0]);
    }
    console.log(matchWords.join(", "));
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");

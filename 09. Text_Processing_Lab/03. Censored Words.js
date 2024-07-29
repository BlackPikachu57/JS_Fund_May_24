function solve(str, word) {
    let censored = str.replace(word, repeat(word));
    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word));
    }
    function repeat(word) {
        let stars = "";
        for (const ch of word) {
            stars += "*";
        }
        return stars;
    }
    console.log(censored);
}

solve("A small sentence with some words", "small");

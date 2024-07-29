function solve(arr, text) {
    const wordsToFill = arr.split(", ");
    const textWords = text.split(" ");
    const templates = textWords.filter((word) => word.includes("*"));
    for (const template of templates) {
        const stars = template.length;
        const rightWord = wordsToFill.find((word) => word.length === stars);
        text = text.replace(template, rightWord);
    }
    console.log(text);
}

solve(
    "great, learning",
    "softuni is ***** place for ******** new programming languages"
);

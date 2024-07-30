function solve(arr) {
    const [str1, str2, replacementWord] = arr;
    let replacementIndex = 0;
    let password = str1.concat(str2);
    for (const ch of password) {
        if (/[aouei]/.test(ch)) {
            const replacementChar =
                replacementWord[replacementIndex].toUpperCase();
            password = password.replace(ch, replacementChar);
            replacementIndex++;
            if (replacementIndex === replacementWord.length) {
                replacementIndex = 0;
            }
        }
    }
    const reversedPass = password.split("").reverse().join("");
    console.log("Your generated password is " + reversedPass);
}

solve(["ilovepizza", "ihatevegetables", "orange"]);

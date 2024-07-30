function solve(arr) {
    let message = arr.shift(); //string
    const msgWords = message.split(/[.,!?]? /);
    const words = arr.shift();
    const notKnown = msgWords.filter((word) => word.includes("_"));
    // console.log(message);
    // console.log("---------------------------");
    // console.log(words);
    // console.log("---------------------------");
    // console.log(notKnown);
    for (const template of notKnown) {
        const rightWord = words.find((word) => word.length === template.length);
        message = message.replace(template, rightWord);
    }
    console.log(message);
}

solve([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);

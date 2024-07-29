function solve(word, text){
    const lowercaseText = text.toLowerCase()
    const textWords = lowercaseText.split(' ')
    if(textWords.includes(word)){
        console.log(word);
    }
    else {
        console.log(`${word} not found!`);
    }
}
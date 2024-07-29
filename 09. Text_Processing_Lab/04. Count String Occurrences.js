function solve(text, word){
    let br = 0
    let arr = text.split(' ')
    for (const take of arr) {
        if (take === word){
            br++
        }
    }
    console.log(br);
}

solve('This is a word and it also is a sentence', 'is')
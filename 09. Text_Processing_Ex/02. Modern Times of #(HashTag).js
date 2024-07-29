function solve(text){
    const words = text.split(' ')
    const hashWords = words.filter(word => word.startsWith('#') && word.length > 1)
    const pattern = /\b[A-Za-z]+\b/
    for (let hashtag of hashWords) {
        hashtag = hashtag.substring(1)
        if (pattern.test(hashtag)){
            console.log(hashtag);
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
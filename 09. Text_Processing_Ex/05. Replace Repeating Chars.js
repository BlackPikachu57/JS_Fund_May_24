function solve(text){
    let str = ''
    for (const ch of text) {
        if (!str.endsWith(ch)){
            str += ch
        }
    }
    console.log(str);
}

solve('qqqwerqwecccwd')
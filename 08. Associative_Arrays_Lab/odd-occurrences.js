function solve(input){
    let map = new Map()
    input = input.toLowerCase()
    let words = input.split(' ')
    for (const word of words) {
        if (map.has(word)){
            map.set(word, map.get(word) + 1)
        } else {
            map.set(word, 1)
        }
    }
    let odd = []
    for (const elem of map) {
        if (elem[1] % 2 === 1){
            odd.push(elem[0])
        }
    }
    console.log(odd.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
solve('Cake IS SWEET is Soft CAKE sweet Food')
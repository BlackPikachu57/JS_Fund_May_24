function solve(input){
    let sorted = input.sort((a,b) => b-a)
    console.log(sorted);
    let result = []
    while(sorted.length > 0) {
        result.push(sorted.shift())
        result.push(sorted.pop())
    }
    console.log(result.join(' '))
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18])
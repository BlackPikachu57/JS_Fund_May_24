function solve(input){
    let temp = []
    for (const num of input) {
        if (!temp.includes(num)){
            temp.push(num)
        }
    }
    console.log(temp.join(' '));
}

solve([20,8,12,13,4,4,8,5])
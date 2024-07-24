function solve(input){
    for (let i = 0; i < input.length; i++) {
        let index = input.findIndex((e) => e === input[i])
        if (index !== -1){
            input.slice(index, 1)
        }
    }
    console.log(input);
}

solve([7,8,9,7,2,3,4,1,2])
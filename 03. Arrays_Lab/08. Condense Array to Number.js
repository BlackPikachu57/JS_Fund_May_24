function main(input){
    let condensed = []
    while(input.length > 1){
        condensed = []
        for (let i = 0; i < input.length-1; i++){
            condensed[i] = input[i] + input[i+1]
        }
        if (input.length > condensed.length)
            input = condensed
    }
    console.log(input[0])
}

main([5,0,4,1,2])
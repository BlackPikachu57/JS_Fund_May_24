function main(inputArr1, inputArr2){
    let equal = true
    let sum = 0
    for(let i = 0; i < inputArr1.length; i++){
        if(+inputArr1[i] !== +inputArr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            equal = false
            break
        }
    }
    if (equal === true){
        for(let i = 0; i < inputArr1.length; i++){
            sum += +inputArr1[i]
        }
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}

main(['1'], ['10'])
function main(inputArr){
    let sumEven = 0
    let sumOdd = 0
    for(let i = 0; i < inputArr.length; i++){
        if (+inputArr[i] % 2 == 0){
            sumEven += +inputArr[i]
        }
        else sumOdd += +inputArr[i]
    }
    console.log(sumEven - sumOdd)
}

main(['3','5','7','9'])
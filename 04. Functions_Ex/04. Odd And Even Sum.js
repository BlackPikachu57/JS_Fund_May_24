function main(num){
    let sumOdd = 0
    let sumEven = 0
    while (num >= 1){
        let digit = num % 10
        if (digit % 2 === 0){
            sumEven += digit
        }
        else sumOdd += digit
        num = Math.floor(num/10)
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}

main(3495892137259234)
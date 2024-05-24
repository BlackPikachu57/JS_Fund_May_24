function main(num){
    let sum = 0
    while (num % 10 != 0){
        sum += num % 10
        num = Math.floor(num / 10)
    }
    console.log(sum)
}

main(543)
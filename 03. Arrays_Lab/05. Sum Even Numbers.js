function main(inputArr){
    let sum = 0
    for(let i = 0; i < inputArr.length; i++){
        if (+inputArr[i] % 2 == 0){
            sum += +inputArr[i]
        }
    }
    console.log(sum)
}

main(['2','4','6','8','10'])
function main(start, end){
    let sum = 0
    let str = ''
    for (let i = start; i <= end; i++){
        sum += i
        str += i + " "
    }
    console.log(str)
    console.log(`Sum: ${sum}`)
}

main(0,26)
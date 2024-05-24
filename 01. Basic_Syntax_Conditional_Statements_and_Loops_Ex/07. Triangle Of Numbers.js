function main(num){
    let str = ''
    for(let i = 1; i <= num; i++){
        str = i + " "
        for (let j = 1; j < i; j++){
            str += i + " "
        }
        console.log(str)
    }
}

main(6)
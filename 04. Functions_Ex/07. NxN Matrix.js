function main(num){
    let str = ''
    for (let k = 0; k < num; k++){
        str += num + ' '
    }
    for (let i = 0; i < num; i++){
        console.log(str)
    }
}

main(7)
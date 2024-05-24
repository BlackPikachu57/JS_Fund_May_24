function main(binary){
    let dec = 0
    let len = binary.length
    for (let i = 0; i < 8; i++){
        if (+binary[len - 1 - i] === 1)
            dec += Math.pow(2, i)
    }
    console.log(dec)
}

main(`11111111`)
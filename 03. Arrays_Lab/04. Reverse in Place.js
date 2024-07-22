function main(inputArr){
    let out = ''
    for (let i = inputArr.length - 1; i >= 0; i--){
        out += `${inputArr[i]} `
    }
    console.log(out)
}

main(['abc','def','hig','klm','nop'])
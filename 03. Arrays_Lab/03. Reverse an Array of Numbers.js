function main(num, inputArr){
    let arr = []
    for (let i = 0; i < num; i++){
        arr[i] = inputArr[i]
    }
    let output = ''
    for (let i = num-1; i >= 0; i--){
        output += `${arr[i]} `
    }
    console.log(output)
}

main(4,[-1,20,99,5])
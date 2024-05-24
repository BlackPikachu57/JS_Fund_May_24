function main(str){
    let a = str.toString()
    let temp = ""
    for (let i = a.length - 1; i >= 0; i--){
        temp += a[i]
    }
    console.log(temp)
}

main(1234)
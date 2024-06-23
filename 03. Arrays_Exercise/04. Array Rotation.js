function main(a1, n){
    let temp = 0
    for (let i = 0; i < n; i++){
        for (let k = 0; k < a1.length-1; k++){
            temp = a1[k]
            a1[k] = a1[k+1]
            a1[k+1] = temp
        }
    }
    console.log(a1.join(" "))
}

main([51, 47, 32, 61, 21], 2)
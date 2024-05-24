function main(num){
    let res = 0
    let temp = num
    while (temp % 10 != 0){
        res += temp % 10
        temp = Math.floor(temp / 10)
    }
    res.toString().includes('9') ? console.log(`${num} Amazing? True`) : console.log(`${num} Amazing? False`)
}

main(583472)
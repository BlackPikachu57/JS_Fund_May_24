function main(n){
    let sum
    for (let i = 1; i <= n; i++){
        sum = 0
        let temp = i
        while(temp != 0){
            sum += temp % 10
            temp = Math.trunc(temp / 10)
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`)
        }
        else console.log(`${i} -> False`)
    }
}

main(20)
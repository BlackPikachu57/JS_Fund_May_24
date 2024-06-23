function main(arr){
    for (let i = 0; i < arr.length; i++){
        let str = arr[i].toString()
        let rev = ''
        for (let j = str.length - 1; j >= 0; j--){
            rev += str[j]
        }
        if (str === rev){
            console.log(true)
        }
        else console.log(false)
    }
}

main([32,2,232,1010])
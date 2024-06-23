function main(arr){  
    for (let i = 0; i < arr.length; i++){
        let sum1 = 0
        let sum2 = 0
        for (let m = 0; m < i; m++){
            sum1 += arr[m]
        }
        for (let m = arr.length - 1; m > i; m--){
            sum2 += arr[m]
        }
        if (sum1 === sum2){
            console.log(i)
            return
        }
    }
    console.log('no')
}

main([10,5,5,99,3,4,2,5,1,1,4])
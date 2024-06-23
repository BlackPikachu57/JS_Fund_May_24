function main(arr){
    let a2 = []
    let br = 0
    let check = true
    for (let i = 0; i < arr.length; i++){
        check = true
        for (let k = i+1; k < arr.length; k++){
            if (arr[i] <= arr[k]){
                check = false
                break
            }
        }
        if (check !== false){
            a2[br] = arr[i]
            br++
        }
    }
    console.log(a2.join(" "))
}

main([14,24,3,19,15,17])
function main(arr){
    let a = []
    let br = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            a[br] = arr[i]
            a[br+1] = arr[i+1]
            br+=2
        }
    }
    console.log(a)
}

main([2,1,1,2,3,3,2,2,2,1])
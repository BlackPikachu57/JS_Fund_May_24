function main(arr){
    let sumOrg = 0
    let sumNew = 0
    for (let i = 0; i < arr.length; i++){
        sumOrg += arr[i]
        if (arr[i] % 2 == 0){
            arr[i] += i
        }
        else arr[i] -= i
        sumNew += arr[i]
    }
    console.log(arr)
    console.log(sumOrg)
    console.log(sumNew)
}

main([-5,11,3,0,2])
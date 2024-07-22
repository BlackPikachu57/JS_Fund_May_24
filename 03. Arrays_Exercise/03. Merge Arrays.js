function main(arr1, arr2){
    let a3 = []
    for (let i = 0; i < arr1.length; i++){
        if (i % 2 == 0){
            a3[i] = +arr1[i] + +arr2[i]
        }
        else a3[i] = arr1[i] + arr2[i]
    }
    console.log(a3.join(" - "))
}

main(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)
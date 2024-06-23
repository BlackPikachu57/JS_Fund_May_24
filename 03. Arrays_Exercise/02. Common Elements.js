function main(arr1, arr2){
    for (let i = 0; i < arr1.length; i++){
        let str = arr1[i]
        for (let j = 0; j < arr2.length; j++){
            if (str === arr2[j]){
                console.log(str)
            }
        }
    }
}

main(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)
function main(numOne, numTwo, numThree){
    let br = 0
    if(numOne < 0){
        br++
    }
    if(numTwo < 0){
        br++
    }
    if(numThree < 0){
        br++
    }
    if(br % 2 === 0){
        console.log(`Positive`)
    }
    else console.log(`Negative`)
}

main(-6,-12,14)
function main(n1,n2,n3){
    let max = n1
    if (n2 > max && n2> n3){
        max = n2
    }
    else if (n3 > max && n3 > n2){
        max = n3
    }
    console.log(max)
}

main(43,43.2,43.1)
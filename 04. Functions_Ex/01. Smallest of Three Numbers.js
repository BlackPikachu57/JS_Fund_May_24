function main(n1,n2,n3){
    let temp = 0
    if (n1 < n2 && n1 < n3){
        temp = n1
    }
    else if (n2 < n1 && n2 < n3){
        temp = n2
    }
    else temp = n3
    console.log(temp)
}
main(2,2,2)
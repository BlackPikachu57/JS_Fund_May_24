function main(n1, n2){
    function factorial(a){
        if (a < 0){
            return -1
        }
        else if (a === 0){
            return 1
        }
        else
            return (a * factorial(a - 1))
    }
    let fact1 = factorial(n1)
    let fact2 = factorial(n2)
    let result = (fact1 / fact2).toFixed(2)
    console.log(result)
}

main(6,2)
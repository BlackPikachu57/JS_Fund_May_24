function calculator(n1, operator, n2){
    let res = 0
    switch (operator){
        case `+`:{
            res = +n1 + +n2
            break
        }
        case `-`:{
            res = +n1 - +n2
            break
        }
        case `*`:{
            res = +n1 * +n2
            break
        }
        case `/`:{
            if (n2 != 0)
                res = +n1 / +n2
            else if (n1 != 0) res = +n2 / +n1 
            break
        }
    }
    console.log(res.toFixed(2))
}

calculator(0,'/',0)
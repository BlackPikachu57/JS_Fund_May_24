function main(prod, num){
    let sum =0
    switch (prod){
        case `coffee`:{
            for (let i = 0; i < num; i++){
                sum += 1.5
            }
            break
        }
        case `water`:{
            for (let i = 0; i < num; i++){
                sum += 1
            }
            break
        }
        case `coke`:{
            for (let i = 0; i < num; i++){
                sum += 1.4
            }
            break
        }
        case `snacks`:{
            for (let i = 0; i < num; i++){
                sum += 2
            }
            break
        }
    }
    console.log(sum.toFixed(2))
}

main(`coffee`,2)
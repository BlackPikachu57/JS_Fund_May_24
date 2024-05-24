function main(qty, type, day){
    let total = 0
    if (type === `Students` && day === `Friday`){
        total += qty * 8.45
        if (qty >= 30)
            total *= 0.85
    }
    else if (type === `Students` && day === `Saturday`){
        total += qty * 9.8
        if (qty >= 30)
            total *= 0.85
    }
    else if (type === `Students` && day === `Sunday`){
        total += qty * 10.46
        if (qty >= 30)
            total *= 0.85
    }
    else if (type === `Business` && day === `Friday`){
        total += qty * 10.9
        if (qty >= 100)
            total -= 10 * 10.9
    }
    else if (type === `Business` && day === `Saturday`){
        total += qty * 15.6
        if (qty >= 100)
            total -= 10 * 15.6
    }
    else if (type === `Business` && day === `Sunday`){
        total += qty * 16
        if (qty >= 100)
            total -= 10 * 16
    }
    else if (type === `Regular` && day === `Friday`){
        total += qty * 15
        if (qty >= 10 && qty <= 20)
            total *= 0.95
    }
    else if (type === `Regular` && day === `Saturday`){
        total += qty * 20
        if (qty >= 10 && qty <= 20)
            total *= 0.95
    }
    else if (type === `Regular` && day === `Sunday`){
        total += qty * 22.5
        if (qty >= 10 && qty <= 20)
            total *= 0.95
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}

main(40, `Regular`, `Saturday`)
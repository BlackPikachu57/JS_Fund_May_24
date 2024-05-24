function main(yield){
    if (yield < 100){
        console.log(0)
        console.log(0)
        return
    }
    let totalSpice = 0
    let days = 0
    /*do{
        totalSpice += yield
        days++
        yield -= 10
    }while(yield >= 100);*/
    while(yield >= 100){
        totalSpice += yield - 26
        days++
        yield -= 10
    }
    totalSpice -= 26
    console.log(days)
    console.log(totalSpice)
}

main(450)
function main(num){
    let str = ''
    if (num === 100){
        console.log(`100% Complete!\n[%%%%%%%%%%]`)
        return
    }
    str = `${num}% [`
    for (let i = 0; i < Math.floor(num/10);i++){
        str += '%'
    }
    for (let i = 0; i < 10 - Math.floor(num / 10); i++){
        str += '.'
    }
    str += ']'
    console.log(`${str}\nStill loading...`)
}

main(99)
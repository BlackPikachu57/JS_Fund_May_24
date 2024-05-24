function main(param){
    let type = typeof(param)
    console.log(type)
    if (type == 'string' || type == 'number'){
        console.log(param)
    }
    else console.log(`Parameter is not suitable for printing`)
}

main('Hello, JavaScript!')
main(18)
main(null)
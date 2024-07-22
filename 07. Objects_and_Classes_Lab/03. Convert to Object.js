function main(json){
    let obj = JSON.parse(json)
    let keys = Object.keys(obj)
    for (let key of keys){
        console.log(`${key}: ${obj[key]}`)
    }
}

main('{"name": "George", "age": 40, "town": "Sofia"}')
function main(obj){
    let entries = Object.entries(obj)
    for (let i = 0; i < entries.length; i++){
        console.log(`${entries[i][0]} -> ${entries[i][1]}`)
    }
}

main({name: 'Sofia', 
    area: 492, 
    population: 1238438, 
    country: "Bulgaria", 
    postCode: "1000"})
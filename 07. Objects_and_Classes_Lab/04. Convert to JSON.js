function main(firstName, lastName, hairColor){
    let obj = {
        name: firstName,
        lastName,
        hairColor
    }
    let dataJSON = JSON.stringify(obj)
    console.log(dataJSON)
}

main('George', 'Jones', 'Brown')
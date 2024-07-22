function journey(arr){
    let energy = arr[0]
    let i = 1
    let mountainBr = 0
    let artifact = 0
    while (arr[i] !== 'Journey ends here!'){
        switch (arr[i]){
            case 'mountain':{
                energy -= 10
                mountainBr++
                if(mountainBr === 3){
                    artifact++
                    mountainBr = 0
                }
                if(artifact === 3){
                    console.log(`The character reached the legendary artifact with ${energy.toFixed(2)} energy left.`)
                    return
                }
                break
            }
            case 'desert':{
                energy -= 15
                break
            }
            case 'forest':{
                energy += 7
                break
            }
        }
        if (energy <= 0){
            console.log(`The character is too exhausted to carry on with the journey.`)
            return
        }
        i++
    }
    console.log(`The character could not find all the pieces and needs ${3 - artifact} more to complete the legendary artifact.`)
}

function calculator(str){
    let arr = str[0].split(/[\s>>]+/)
    let result, car, years, traveled, travelTax
    let grandResult = 0
    for (let i = 0; i < arr.length; i += 3){
        result = 0
        travelTax = 0
        car = arr[i]
        years = +arr[i+1]
        traveled = +arr[i+2]
        switch (car){
            case 'family':{
                travelTax = 12 * Math.floor(traveled / 3000)
                result = travelTax + (50 - years * 5)
                break
            }
            case 'heavyDuty':{
                travelTax = 14 * Math.floor(traveled / 9000)
                result = travelTax + (80 - years * 8)
                break
            }
            case 'sports':{
                travelTax = 18 * Math.floor(traveled / 2000)
                result = travelTax + (100 - years * 9)
                break
            }
            default:{
                console.log(`Invalid car type.`)
                continue
            }
        }
        grandResult += result
        console.log(`A ${car} car will pay ${result.toFixed(2)} euros in taxes.`)
    }
    console.log(`The National Revenue Agency will collect ${grandResult.toFixed(2)} euros in taxes.`)
}

//calculator(([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]))

function chat(input){
    let i = 0
    let k = 0
    let chatLog = []
    while(true){
        let tempArr = input[i].split(' ')
        if (tempArr[k] === 'end'){
            break
        }
        switch(tempArr[k]){
            case 'Chat':{
                chatLog.push(tempArr[k+1])
                break
            }
            case 'Delete':{
                let index = chatLog.findIndex(temp => temp === tempArr[k+1])
                if (index === -1){
                    break
                }
                else {
                    chatLog.splice(index,1)
                }
                break
            }
            case 'Edit':{
                let index = chatLog.findIndex(temp => temp === tempArr[k+1])
                if (index === -1){
                    break
                }
                else {
                    chatLog[index] = tempArr[k+2]
                }
                break
            }
            case 'Pin':{
                let index = chatLog.findIndex(temp => temp === tempArr[k+1])
                if (index === -1){
                    break
                } 
                else {
                    chatLog.push(chatLog[index])
                    chatLog.splice(index,1)
                }
                break
            }
            case 'Spam':{
                for (let j = 1; j < tempArr.length; j++){
                    chatLog.push(tempArr[j])
                }
                break
            }
        }
        i++
    }
    for (let j = 0; j < chatLog.length; j++){
        console.log(chatLog[j])
    }
}

chat(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"])
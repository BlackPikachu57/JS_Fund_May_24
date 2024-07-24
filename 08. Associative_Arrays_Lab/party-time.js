function solve(input){
    let partyList = new Set()
    let index = input.indexOf("PARTY")
    let arrived = input.slice(index+1)
    for (const guest of input) {
        if (guest === "PARTY"){
            break
        }
        else partyList.add(guest)
    }
    for (const arrivedGuest of arrived) {
        if (partyList.has(arrivedGuest))
        {
            partyList.delete(arrivedGuest)
        }
    }
    console.log(partyList)
}

solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
    ]
    )
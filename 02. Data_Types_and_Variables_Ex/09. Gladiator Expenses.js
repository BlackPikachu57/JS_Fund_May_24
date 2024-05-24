function main(lost, helmPrice, swordPrice, shieldPrice, armorPrice){
    let helmBroke = Math.floor(lost / 2)
    let swordBroke = Math.floor(lost / 3)
    let shieldBroke = Math.floor(lost / 6)
    let armorBroke = Math.floor(lost / 12)
    let expenses = helmBroke * helmPrice + swordBroke * swordPrice + shieldBroke * shieldPrice + armorBroke * armorPrice
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

main(23,12.5,21.5,40,200)
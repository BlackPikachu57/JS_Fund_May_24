function main(input){
    let health = 100
    let bitcoins = 0
    let arr = input.split(/[\s|]+/)
    let length = arr.length / 2
    for (let i = 0; i < arr.length; i+=2){//room check
        if(arr[i] === 'potion'){
            let temp = 100 - health
            let heal = +arr[i+1]
            if (heal > temp){
                health += temp
                console.log(`You healed for ${temp} hp.`)
                console.log(`Current health: ${health} hp.`)
            }
            else {health += +heal
            console.log(`You healed for ${heal} hp.`)
            console.log(`Current health: ${health} hp.`)}
        }
        else if (arr[i] === 'chest'){
            bitcoins += +arr[i+1]
            console.log(`You found ${arr[i+1]} bitcoins.`)
        }
        else{
            health -= +arr[i+1]
            if(health <= 0){
                console.log(`You died! Killed by ${arr[i]}.`)
                console.log(`Best room: ${i / 2 + 1}`)
                return
            }
            console.log(`You slayed ${arr[i]}.`)
        }
    }
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`)
}

main("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
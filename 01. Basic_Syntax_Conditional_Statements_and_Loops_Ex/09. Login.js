function main(input){
    let username = input[0]
    let br = 0
    let password
    let i = 1
    let newString = ''
    for (let j = username.length - 1; j >= 0; j--) {
        newString += username[j];
    }
    do{
        password = input[i]      
        if(password === newString){
            console.log(`User ${username} logged in.`); return;}
        else {
            if (br === 3){
                console.log(`User ${username} blocked!`)
                return
            }
            else
                console.log(`Incorrect password. Try again.`)
        }
        br++
        i++
    }while(true)  
}

main(['sunny','rainy','cloudy','sunny','not sunny'])
main(['Acer','login','go','let me in','recA'])
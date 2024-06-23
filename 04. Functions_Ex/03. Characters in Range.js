function main(a,b){
    let ascii1 = a.charCodeAt(0)
    let ascii2 = b.charCodeAt(0)
    let str = ''
    if (ascii1 > ascii2){
        for (let i = ascii2+1; i < ascii1; i++){
            str += String.fromCharCode(i) + " "
        }
    }
    else{
        for (let i = ascii1+1; i < ascii2; i++){
            str += String.fromCharCode(i) + " "
        }
    }
    console.log(str)
}

main('#',':')
function main(pass){
    let len = pass.length
    let br = 0
    let lenBul = true
    let charBul = true
    let digBul = true
    if (len < 6 || len > 10){
        console.log(`Password must be between 6 and 10 characters`)
        lenBul = false
    }
    if (/^[A-Za-z0-9]*$/.test(pass) == false){
        console.log(`Password must consist only of letters and digits`)
        charBul = false
    }
    for (let i = 0; i < len; i++){
        if(/\d/.test(pass[i])){
            br++
        }
    }
    if(br < 2){
        console.log(`Password must have at least 2 digits`)
        digBul = false
    }
    if (lenBul === true && digBul === true && charBul === true){
        console.log(`Password is valid`)
    }
}

main(`Pa$s$s`)
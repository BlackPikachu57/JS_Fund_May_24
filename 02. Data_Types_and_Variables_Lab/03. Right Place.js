function main(str1, char1, str2){
    let res = str1.replace('_',char1)
    if (res === str2){
        console.log('Matched')
    }
    else console.log(`Not Matched`)
}

main(`Str_ng`,`i`,`String`)
function main(num){
    let br = 0
    let i = 1
    let sum = 0
    while(br < num){
        if (i % 2 == 1){
            console.log(i);
            sum += i;            
            br++;
        }
        i++;
    }
    console.log(`Sum: ${sum}`)
}

main(3)
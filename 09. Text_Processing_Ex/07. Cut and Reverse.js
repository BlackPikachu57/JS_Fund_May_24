function solve(text){
    const length = text.length / 2
    let firstHalf = text.substring(0, length).split('').reverse().join('')
    let secondHalf = text.substring(length).split('').reverse().join('')
    console.log(firstHalf);
    console.log(secondHalf);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')
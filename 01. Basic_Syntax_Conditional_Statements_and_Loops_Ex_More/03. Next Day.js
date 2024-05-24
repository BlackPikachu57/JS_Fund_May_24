function main(year, month, day){
    let date = new Date(year,month-1,day+1)
    return date.toJSON().split('T')[0]
}

console.log(main(2016,9,30))
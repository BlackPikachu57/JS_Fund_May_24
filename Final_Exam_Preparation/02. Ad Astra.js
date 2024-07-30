function solve(input) {
    const pattern =
        /(#|\|)(?<itemName>[A-z\s]+)\1(?<expirationDate>(\d{2})\/(\d{2})\/(\d{2}))\1(?<calories>\d{0,10000})\1/g;
    const info = input[0];
    let tokens = [];
    tokens = info.split(pattern);
    console.log(tokens);
}

solve([
    "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
// solve([
//     "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
// ]);
// solve(["Hello|#Invalid food#19/03/20#450|$5*(@"]);

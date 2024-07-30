function solve(input) {
    let str = input.shift();
    let pairs = [];
    let mirrors = [];
    const regex = /[@# ]+/;
    let tokens = str
        .split(regex)
        .filter((a) => a.length >= 3 && !a.search(/\b[A-Za-z]+\b/));
    console.log(tokens);
    for (let i = 0; i < tokens.length; i += 2) {}
}

solve([
    "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);

// solve(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);

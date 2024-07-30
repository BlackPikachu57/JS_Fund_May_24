function solve(input) {
    const regex = /[+]359([ -])2\1(\d{3})\1(\d{4})\b/g;
    let correct = input[0].match(regex);
    console.log(correct.join(", "));
}

solve([
    "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);

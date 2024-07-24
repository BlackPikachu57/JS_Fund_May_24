function solve(input, bomb) {
    const bombNum = bomb.shift();
    const bombPower = bomb.shift();
    for (const num of input) {
        if (num === bombNum) {
            let index = input.indexOf(num);
            input.splice(index - bombPower, bombPower * 2 + 1);
        }
    }
    console.log(input);
    let sum = 0;
    for (const num of input) {
        sum += num;
    }
    console.log(sum);
}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
solve([1, 7, 7, 1, 2, 3], [7, 1]);
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

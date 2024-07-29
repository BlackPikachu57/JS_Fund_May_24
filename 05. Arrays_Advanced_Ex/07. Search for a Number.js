function solve(input, manipul) {
    const takeElem = manipul.shift();
    const deleteElem = manipul.shift();
    const findElem = manipul.shift();
    let taken = [];
    for (let i = 0; i < takeElem; i++) {
        taken.push(input[i]);
    }
    taken.splice(0, deleteElem);
    let br = 0;
    for (let i = 0; i < taken.length; i++) {
        if (taken[i] === findElem) {
            br++;
        }
    }
    console.log(`Number ${findElem} occurs ${br} times.`);
}

solve([7, 1, 5, 8, 2, 7], [3, 1, 5]);

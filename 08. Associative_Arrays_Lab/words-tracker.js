function solve(input){
    const tracker = {}
    const firstWords = input[0].split(' ')
    for (const word of firstWords) {
        tracker[word] = 0
    }
    for (let i = 1; i < input.length; i++) {
        let current = input[i]
        if (tracker.hasOwnProperty(current)){
            tracker[current] += 1
        }
    }
    let entries = Object.entries(tracker)
    entries.sort(([keyA, valA], [keyB, valB]) => {
        return valB - valA
    })
    for (const e of entries) {
        console.log(`${e[0]} - ${e[1]}`);
    }
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
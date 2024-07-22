function solve(input) {
  let partyList = new Set();
  let index = input.indexOf("PARTY");
  let arrived = input.slice(index + 1);
  for (const guest of input) {
    if (guest === "PARTY") {
      break;
    } else partyList.add(guest);
  }
  for (const arrivedGuest of arrived) {
    if (partyList.has(arrivedGuest)) {
      partyList.delete(arrivedGuest);
    }
  }
  console.log(partyList.size);
  let vip = []
  let regular = []
  for (const guest of partyList) {
    if (Number(guest[0]) % 1 === 0){
        vip.push(guest)
    }
    else regular.push(guest)
  }
  vip = vip.concat(regular)
  for (const elem of vip) {
    console.log(elem);
  }
}

solve(['m8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'xys2FYzn',
  'MDzcM9ZK',
  '7fassg52v',
  '2dasfwa',
  'PARTY',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ'
  ]  
    );

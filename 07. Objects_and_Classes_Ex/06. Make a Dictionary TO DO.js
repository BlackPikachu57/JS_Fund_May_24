function main(data) {
  let parsedData = [];
  for (let i = 0; i < data.length; i++) {
    let term = JSON.parse(data[i]);
    let termKey = Object.keys(term);
    let added = false;
    for (let j = 0; j < parsedData.length; j++) {
      let tempKey = Object.keys(parsedData[j]);
      if (termKey === tempKey) {
        parsedData[j][termKey] = term[tempKey];
        added = true;
      }
    }
    if (added === false) {
      parsedData.push(term);
    } else continue;
  }
  for (let i = 0; i < parsedData.length; i++) {
    let values = Object.values(parsedData[i])
    let key = Object.keys(parsedData[i])
    console.log(`Term: ${key} => Definition: ${values}`);
  }
}

main([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  '{"Microphone":"A"}',
]);
/**let temp = JSON.parse(data[i])
        let tempKey = Object.keys(temp)
        let parsedKey = Object.keys(parsedData)
        let added = false
        for (let j = 0; j < parsedData.length; j++) {            
            if (tempKey[0] === parsedKey[j])
            {
                parsedData[j][parsedKey[j]] = temp
                added = true
                break
            }
        }
        if (added === true){
            continue
        }
        else {
            parsedData.push(temp)
        }
    }
    let elements = Object.entries(parsedData[0])
    for (let i = 0; i < parsedData.length; i+=2) {
        console.log(`Term: ${elements[i]} => Definition: ${elements[i+1]}`);
    } */

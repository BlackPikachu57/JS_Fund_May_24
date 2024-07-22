function main(arr) {
  let towns = [];
  for (let each of arr) {
    let [name, latitude, longitude] = each.split(" | ");
    let townData = {};
    townData.town = name;
    townData.latitude = +latitude;
    townData.longitude = +longitude;
    townData.latitude = townData.latitude.toFixed(2);
    townData.longitude = townData.longitude.toFixed(2);
    towns.push(townData);
  }
  for (let k of towns) {
    console.log(k);
  }
}

main(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);

function main(arr) {
  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }
  let heroes = [];
  for (let i = 0; i < arr.length; i++) {
    let [name, level, items] = arr[i].split(" / ");
    heroes.push(new Hero(name, +level, items));
  }
  for (let i = 0; i < heroes.length; i++) {
    for (let j = i + 1; j < heroes.length; j++) {
      if (heroes[i].level > heroes[j].level) {
        let temp = heroes[i];
        heroes[i] = heroes[j];
        heroes[j] = temp;
      }
    }   
  }
  for (const h of heroes) {
    console.log(`Hero: ${h.name}\nlevel => ${h.level}\nitems => ${h.items}`)
  }
}

main([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

function solve(input) {
    const numHeroes = +input.shift();
    let heroes = [];
    for (let i = 0; i < numHeroes; i++) {
        let [name, health, mana] = input.shift().split(" ");
        let hero = {};
        hero.name = name;
        hero.health = +health;
        hero.mana = +mana;
        heroes.push(hero);
    }
    for (const line of input) {
        const tokens = line.split(" - ");
        const command = tokens[0];
        if (command === "End") {
            break;
        }
        const heroName = tokens[1];
        let currentHero = 0;
        for (const hero of heroes) {
            if (hero.name === heroName) {
                currentHero = heroes.indexOf(hero);
            }
        }
        switch (command) {
            case "CastSpell": {
                const manaNeeded = +tokens[2];
                const spellName = tokens[3];
                if (heroes[currentHero].mana >= manaNeeded) {
                    heroes[currentHero].mana -= manaNeeded;
                    console.log(
                        `${heroes[currentHero].name} has successfully cast ${spellName} and now has ${heroes[currentHero].mana} MP!`
                    );
                } else {
                    console.log(
                        `${heroes[currentHero].name} does not have enough MP to cast ${spellName}!`
                    );
                }
                break;
            }
            case "TakeDamage": {
                const damage = +tokens[2];
                const attacker = tokens[3];
                heroes[currentHero].health -= damage;
                if (heroes[currentHero].health > 0) {
                    console.log(
                        `${heroes[currentHero].name} was hit for ${damage} HP by ${attacker} and has ${heroes[currentHero].health} HP left!`
                    );
                } else {
                    console.log(
                        `${heroes[currentHero].name} has been killed by ${attacker}!`
                    );
                    heroes.splice(currentHero, 1);
                }
                break;
            }
            case "Recharge": {
                const amount = +tokens[2];
                let result = heroes[currentHero].mana + amount;
                if (result > 200) {
                    let difference = 200 - heroes[currentHero].mana;
                    console.log(
                        `${heroes[currentHero].name} recharged for ${difference} MP!`
                    );
                    heroes[currentHero].mana = 200;
                } else {
                    console.log(
                        `${heroes[currentHero].name} recharged for ${amount} MP!`
                    );
                    heroes[currentHero].mana = result;
                }
                break;
            }
            case "Heal": {
                const amount = +tokens[2];
                let result = heroes[currentHero].health + amount;
                if (result > 100) {
                    let difference = 100 - heroes[currentHero].health;
                    console.log(
                        `${heroes[currentHero].name} healed for ${difference} HP!`
                    );
                    heroes[currentHero].health = 100;
                } else {
                    console.log(
                        `${heroes[currentHero].name} healed for ${amount} HP!`
                    );
                    heroes[currentHero].health = result;
                }
                break;
            }
        }
    }
    for (const hero of heroes) {
        console.log(`${hero.name}\n  HP: ${hero.health}\n  MP: ${hero.mana}`);
    }
}

solve([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End",
]);

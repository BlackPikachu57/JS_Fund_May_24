function solve(input) {
    let towns = [];
    while (true) {
        let token = input.shift();
        if (token === "Sail") {
            break;
        }
        let town = {};
        let [townName, population, gold] = token.split("||");
        town.townName = townName;
        town.population = +population;
        town.gold = +gold;
        let exists = false;
        for (const town of towns) {
            if (town.townName === townName) {
                exists = true;
                town.population += +population;
                town.gold += +gold;
                break;
            }
        }
        if (exists === false) {
            towns.push(town);
        }
    } //Add Towns to the Arr

    for (const line of input) {
        let tokens = line.split("=>");
        const command = tokens[0];
        switch (command) {
            case "Plunder": {
                const townName = tokens[1];
                const killedPeople = +tokens[2];
                const plunderedGold = +tokens[3];
                for (const town of towns) {
                    if (town.townName === townName) {
                        town.population -= killedPeople;
                        town.gold -= plunderedGold;
                        console.log(`${townName} plundered! ${plunderedGold} gold stolen, ${killedPeople} citizens killed.`);
                        if (town.population <= 0 || town.gold <= 0) {
                            console.log(`${townName} has been wiped off the map!`);
                            const index = towns.indexOf(town);
                            towns.splice(index, 1);
                            break;
                        }
                    }
                }
                break;
            }
            case "Prosper": {
                const townName = tokens[1];
                const moreGold = +tokens[2];
                if (moreGold < 0) {
                    console.log("Gold added cannot be a negative number!");
                    break;
                }
                for (const town of towns) {
                    if (town.townName === townName) {
                        town.gold += moreGold;
                        console.log(`${moreGold} gold added to the city treasury. ${townName} now has ${town.gold} gold.`);
                        break;
                    }
                }
                break;
            }
        }
    } //Pirate commands

    console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);
    for (const town of towns) {
        console.log(`${town.townName} -> Population: ${town.population} citizens, Gold: ${town.gold} kg`);
    }
}

solve(["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"]);

// solve([
//     "Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End",
// ]);

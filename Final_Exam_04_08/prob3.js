function solve(input) {
    let greenhouse = [];
    for (const line of input) {
        let [command, plantString] = line.split(" ");
        switch (command) {
            case "Plant:": {
                let plant = {};
                let [plantName, waterNeeded, section] = plantString.split("-");
                plant.plantName = plantName;
                plant.waterNeeded = +waterNeeded;
                plant.section = section;
                let exists = false;
                for (const plantEx of greenhouse) {
                    if (plantEx.plantName === plantName) {
                        exists = true;
                        plantEx.waterNeeded += +waterNeeded;
                        break;
                    }
                }
                if (exists === false) {
                    greenhouse.push(plant);
                }
                break;
            }
            case "Water:": {
                let [plantName, waterAmount] = plantString.split("-");
                for (const plantEx of greenhouse) {
                    if (plantEx.plantName === plantName) {
                        plantEx.waterNeeded -= +waterAmount;
                        if (plantEx.waterNeeded <= 0) {
                            console.log(`${plantName} has been sufficiently watered.`);
                            const index = greenhouse.indexOf(plantEx);
                            greenhouse.splice(index, 1);
                        }
                    }
                }
                break;
            }
        }
    }
    let sections = {};
    console.log("Plants needing water:");
    for (const plant of greenhouse) {
        console.log(` ${plant.plantName} -> ${plant.waterNeeded}ml left`);
        if (!sections.hasOwnProperty(plant.section)) {
            sections[plant.section] = 1;
        } else {
            sections[plant.section]++;
        }
    }
    console.log("Sections with thirsty plants:");
    let entries = Object.entries(sections);
    for (const ent of entries) {
        console.log(` ${ent[0]}: ${ent[1]}`);
    }
}

// solve(["Plant: Orchid-300-TropicalZone", "Plant: Fern-200-FernGully", "Plant: Orchid-100-TropicalZone", "Water: Daisy-50", "Water: Orchid-400", "EndDay"]);

// solve(["Plant: Cactus-150-DesertArea", "Plant: Bamboo-500-BambooGrove", "Plant: Cactus-50-DesertArea", "Water: Cactus-200", "Water: Bamboo-500", "EndDay"]);

solve(["Plant: Rose-300-FlowerBed", "Plant: Tulip-150-FlowerBed", "Water: Rose-100", "Water: Tulip-150", "EndDay"]);

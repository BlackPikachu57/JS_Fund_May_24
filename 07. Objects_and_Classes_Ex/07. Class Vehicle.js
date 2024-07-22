class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type
        this.model = model
        this.parts = parts
        this.parts.quality = parts.engine * parts.power
        this.fuel = fuel
    }
    drive(loss){
        this.fuel -= loss
    }
}

let parts = {engine: 9, power: 500}
let vehicle = new Vehicle('a','b',parts,840)
vehicle.drive(20)
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
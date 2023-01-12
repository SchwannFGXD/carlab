const Car = require('./car');

const Dealership = function(inputName, maxCarN){
    this.name = inputName;
    this.maxCarN = maxCarN;
    this.carList = [];
};

Dealership.prototype.currentCarCount = function(){
    return this.carList.length;
}

Dealership.prototype.addCar = function(car){
    if(this.carList.length<this.maxCarN){
        this.carList.push(car);
    }
}

Dealership.prototype.carByManufacturer = function(manufacturerName){
    const specificList = [];
    for(let car of this.carList){
        if(car.manufacturer === manufacturerName){
            specificList.push(car);
        }
    }
    return specificList;
}

Dealership.prototype.totalValue = function(){
    let sum = 0;
    for(let car of this.carList){
        sum += car.price;
    }
    return sum;
}



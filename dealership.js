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

Dealership.prototype.carManufacturers = function(){
    return this.carList.map((car) => {
        return car.manufacturer
    })
}

Dealership.prototype.carByManufacturer = function(manufacturerName){
    return this.carList.filter((car)=>{
        return car.manufacturer === manufacturerName;
    })
}

Dealership.prototype.totalValue = function () {
    return this.carList.reduce((reducer, car) => reducer + car.price, 0);
}

module.exports = Dealership;

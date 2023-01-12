const Car = require('./car');
const Dealership = require('./dealership');


// console.log(weewoo);
// console.log(weewoo.currentCarCount());
// console.log(bmw);
// weewoo.addCar(bmw);
// weewoo.addCar(mercedes);
// weewoo.addCar(lambo);
// weewoo.addCar(ferar);
// weewoo.addCar(xiaolaoban);

// console.log(weewoo);
// console.log(weewoo.carByManufacturer("china"));
// console.log(weewoo.totalValue());
beforeEach(()=>{
    const bmw = new Car("Vietnam", 45000, "V8");
    const mercedes = new Car("Japan", 55000, "V9");
    const lambo = new Car("Italy", 85000, "V8");
    const ferar = new Car("Italy", 90000, "V8");
    const xiaolaoban = new Car("China", 55000, "V10");
    const weewoo = new Dealership("weewoo", 4);
});

describe('car count', () => { 
    
    test('has empty list', () => {
        
        let expected = 0;
        let actual = weewoo.currentCarCount();
        expect(actual).toBe(expected);
    });

    
});
describe('dealership add car', () => { 
    test('can add car', () => {
        weewoo.addCar(bmw);
        weewoo.addCar(mercedes);
        weewoo.addCar(lambo);
        let expected = 3;
        let actual = weewoo.currentCarCount();
        expect(actual).toBe(expected);
    });

    test('max number of cars', () => {
        weewoo.addCar(bmw);
        weewoo.addCar(mercedes);
        weewoo.addCar(lambo);
        weewoo.addCar(ferar);
        weewoo.addCar(xiaolaoban);
        let expected = 4;
        let actual = weewoo.currentCarCount();
        expect(actual).toBe(expected);
    });
});
describe('car values', () => { 
    
});
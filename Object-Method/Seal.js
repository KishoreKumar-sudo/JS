//Seals an object which prevents new properties from being added to it,
//marks all existing properties as non-configurable.

const car = { price: 12000 };
Object.seal(car);

car.price = 15000; //value changed successfully

console.log(car.price); //15000

delete car.price;

console.log(car.price);
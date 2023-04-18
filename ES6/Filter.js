
let cars = [{ brand: "Maruthi", model: "Swift", color: 'white', price: 1000000 },
{ brand: "Toyota", model: "Innova", color: 'black', price: 3000000 },
{ brand: "Maruthi", model: "800", color: 'red', price: 300000 },
{ brand: "Tata", model: "Nexon", color: 'red', price: 1600000 },
{ brand: "RR", model: "Evoque", color: 'white', price: 7000000 },
{ brand: "Hyndai", model: "i20", color: 'white', price: 1200000 },
{ brand: "Maruthi", model: "ignis", color: 'blue', price: 800000 },
]
let new_Cars = cars.filter((car) => {
    return car.color != 'white'
})
console.log(new_Cars)

let x = [1, 2, 3, 4, 5]
let y = x.filter((n) => n >= 3)

console.log(y); //[ 3, 4, 5 ]

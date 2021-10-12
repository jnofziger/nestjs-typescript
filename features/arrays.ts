const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

//annotation would be string[][]
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//Why use types with arrays?
//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
//carMakers.push(100);

//Helps with iterations over collection: map, foreach, reduce
carMakers.map((car: string): string => {
    return car.toUpperCase(); //autocomplete shows all string methods
});


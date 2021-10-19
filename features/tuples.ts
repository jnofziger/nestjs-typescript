const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

//array
//const pepsi = ['brown', true, 40];

//tuple annotation
const pepsi: [string, boolean, number] = ['brown', true, 40];
//alternatively, use a type alias:
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 35];

const carSpecs: [number, number] = [400, 3354];
const carStats = {
    horsepower: 400,
    weight: 3354
};

type HP = number;
type Weight = number;
const carSpecs2: [HP, Weight] = [400, 3354];


const add = (a: number, b: number): number => {
    return a + b;
};

//inference guesses void return type, so no error
const subtract = (a: number, b: number) => {
    a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather_orig = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

//ES2015
const logWeather_ES2015 = ({ date, weather }) => {
    console.log(date);
    console.log(weather);
}

//destructure: annotation
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);

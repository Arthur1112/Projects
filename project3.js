
// Given a temperature in C output in C, F and K

const convertC = (a) => {
    let fahrenheit = (a * 9/5) + 32;
    let kalvin = a + 273.15;
    const temperatureConverted = [fahrenheit, kalvin]
    return temperatureConverted
}

const temperatureCelsius = 45;

console.log(`The temperature in Celsius is ${temperatureCelsius}°, the temperature in Fahrenheit is ${convertC(temperatureCelsius)[0]}°, and the temperature in Kalvin is ${convertC(temperatureCelsius)[1]}°`)
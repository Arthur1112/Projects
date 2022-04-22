
// Give temperature in F and out put in C

const convertion = (a) => {
    let celsius = (a - 32) * 5/9
    return celsius.toFixed(0)
}
let degreesInFahrenheit = 30
console.log(`${degreesInFahrenheit}°F converted into celsius is ${convertion(degreesInFahrenheit)}°C`)
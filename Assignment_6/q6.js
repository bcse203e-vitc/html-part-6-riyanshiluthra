function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
alert(`${celsius}°C is equal to ${fahrenheit}°F`);

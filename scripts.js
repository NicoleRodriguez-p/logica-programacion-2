const prompt = require('prompt-sync')();

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function convertirTemperatura() {
    let celsius = prompt("Ingresa la temperatura en grados Celsius:");

    // Verificar si el valor ingresado es un número
    if (!isNaN(celsius)) {
        celsius = parseFloat(celsius);

        // Realizar las conversiones
        let fahrenheit = celsiusToFahrenheit(celsius);
        let kelvin = celsiusToKelvin(celsius);
        console.log(`${celsius} grados Celsius son equivalentes a ${fahrenheit} grados Fahrenheit.`);
        console.log(`${celsius} grados Celsius son equivalentes a ${kelvin} Kelvin.`);
    } else {
        console.log("Por favor, ingresa un valor numérico válido.");
    }
}

convertirTemperatura();

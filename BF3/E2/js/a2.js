const anoNacimiento = prompt("¿En qué año naciste?");
const anoactual = 2025;
const edad = anoactual - anoNacimiento;


if (edad >= 18) {
    console.log("Puedes pasar dentro. ¡Bienvenido!");
} else {
    console.log("No puedes pasar. ¡Tírate!");
}

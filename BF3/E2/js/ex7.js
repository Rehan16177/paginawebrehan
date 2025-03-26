const renta = prompt("Ingrese su renta anual en euros:");

if (renta < 10000) {
    console.log ("Tipo impositivo 5%");
} 
 else if (renta >= 10000 && renta < 20000) {
    console.log ("Tipo impositivo 15%");
} 
else if (renta >= 20000 && renta < 35000) {
    console.log ("Tipo impositivo 20%");
} 
else if (renta >= 35000 && renta < 60000) {
    console.log ("Tipo impositivo 30%");
} 
else {
    console.log ("Tipo impositivo 45%");
}



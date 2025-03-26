var numero = prompt("Introduce un número entero positivo:");
var cadena = "";

if (numero > 0) {
    
    for (var counter = numero; counter >= 0; counter--) {
       
        if (cadena.length == 0) {
            cadena = counter;
        } else {
            
            cadena = cadena + ', ' + counter;
        }
    }

    console.log(cadena);
}
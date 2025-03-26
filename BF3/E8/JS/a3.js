var numero = prompt("Introduce un número entero positivo:");
var cadena="";

for (var counter = 1; counter <= numero; counter++) {
    if( counter % 2==1) {
        if(cadena.length == 0) {
            cadena=counter;
        }
        else{
            cadena=cadena+', '+counter;
        }
       
    }
}
console.log(cadena);
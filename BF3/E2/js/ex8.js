const puntuacion = prompt("Ingrese su puntuacion:");
var res = 0;

if (puntuacion == 0.0) {
    console.log ("nivel Inaceptable");
    res = 2400*puntuacion;
    console.log("cantidad de dinero" + res) ;
     

} else if (puntuacion == 0.4) {
    console.log ("nivel Aceptable");
    res = 2400*puntuacion;
    console.log("cantidad de dinero" + res) ;
     

} else if (puntuacion >= 0.6) {
    console.log ("nivel Meritorio");
    res = 2400*puntuacion;
    console.log("cantidad de dinero" + res) ;
     
}